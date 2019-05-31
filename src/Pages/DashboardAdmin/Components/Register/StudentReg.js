import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdown from '../../../../Components/Dropdown/Dropdown';
import { StudentBulkRegistrationForm } from "./StudentRegBulk";
import { Redirect } from 'react-router-dom'
import { message, Button } from 'antd';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     regnum:"",
     index:"",
     email:"",
     course:"",
     group:"",
     redirect:false,
     open:false,
    };
    this.updateInput = this.updateInput.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addStudent = () => {
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("students").add({
      name: this.state.name,
      regnum: this.state.regnum,
      index: this.state.index,
      email: this.state.email,
      password: "UCSC@123",
      course: this.state.course,
      group: this.state.group
    })
    const userRef1 = db.collection("users").add({
      email: this.state.email,
      type:"Student",
      password:"UCSC@123"

    });
    this.setState({
     name:"",
     regnum:"",
     index:"",
     email:"",
     course:"",
     group:"",
    });
  }

  setRedirect = () => { 
    this.setState({
      redirect:true
    })
  }

  renderRedirect = () => {
     if (this.state.redirect){
      return < Redirect to = './admindashboard' /> 
       
     }
  };

  success = (e) => {
    e.preventDefault();
    const db = Firebase.firestore();
    const stuRef = db.collection('students');

    if (
        this.state.name.length == 0 || 
        this.state.regnum.length == 0 ||
        this.state.index.length == 0 ||
        this.state.email.length == 0 ||
        this.state.course.length == 0
      ){
      message
      .loading('Action in progress...',1)
      .then(() => message.info('There are some empty feilds which are cannot be Empty', 2.5));

    } else (
      
      stuRef.where('regnum', '==', this.state.regnum).get()
        .then((regNumSnap) => {
          if (regNumSnap.docs.length == 0) {
            return stuRef.where('index', '==', this.state.index).get();
          }
          message
          .loading('Action in progress...',1)
          .then(() => message.info('The register number already exists', 2.5));
          
          throw new Error('regnum exists');
        })
        .then((indexSnap) => {
          if (indexSnap.docs.length == 0) {
            return stuRef.where('email', '==', this.state.email).get();
          }
          message
          .loading('Action in progress...',1)
          .then(() => message.info('The Index number already exists', 2.5));

          throw new Error('index exists');
        })
        .then((emailSnap) => {
          if (emailSnap.docs.length == 0) {
            this.addStudent();
            message
              .loading('Action in progress...',1)
              .then(() => message.success('Succsesss', 2.5));
          } else {
            message
              .loading('Action in progress...',1)
              .then(() => message.info('The email address already exists', 2.5));
            
            throw new Error('email exists');
          }
        })
        .catch((error) => {
          console.error(error);
          
        })
    )

  }

  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.success}>
          <MDBRow>
            <h4>Student Register</h4>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Student Name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="name"
                onChange={this.updateInput}
                value={this.state.name}
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Register Number
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="regnum"
                onChange={this.updateInput}
                value={this.state.regnum}
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Index Number
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="index"
                onChange={this.updateInput}
                value={this.state.index}
              />
            </MDBCol>
          </MDBRow>
          <br></br>
          <MDBRow>
            <MDBCol md="5">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Email
              </label>
              <input
                type="email"
                id="defaultFormCardNameEx"
                className="form-control"
                name="email"
                onChange={this.updateInput}
                value={this.state.email}
              />
            </MDBCol>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Course
            </label>
            <Dropdown 
              className="form-control" 
              name="course" 
              default="(Please select the course)"
              onChange={this.updateInput}
              value={this.state.course}
              dbName="courses"
              fieldName="name">
            </Dropdown>

            </MDBCol>
            <MDBCol md="2">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Group
            </label>
            <Dropdown 
              className="form-control" 
              name="group" 
              default="(Please select the student group)"
              onChange={this.updateInput}
              value={this.state.group}
              dbName="groups"
              fieldName="code">
            </Dropdown>
            </MDBCol>
          </MDBRow>
          <div className="text-center py-4 mt-3">
            {/* {this.renderRedirect()} */}
            <MDBBtn className="btn btn-outline-purple" type="submit" 
              // onClick={this.setRedirect}
              >
              Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
        <hr></hr>
        <StudentBulkRegistrationForm/>
      </MDBContainer>
    );
  }
}

export default Student;