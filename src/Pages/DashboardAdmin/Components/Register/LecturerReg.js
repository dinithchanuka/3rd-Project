import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdown from '../../../../Components/Dropdown/DropdownMultiple';
import {LecturerBulkRegistrationForm} from './LecturerRegBulk';


class Lecturer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     shortform:"",
     id:"",
     email:"",
     subjects:[],
    };
    this.updateInput = this.updateInput.bind(this)
    this.addLecturer = this.addLecturer.bind(this)
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addLecturer = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("lecturers").add({
      name: this.state.name,
      shortform: this.state.shortform,
      id: this.state.id,
      email: this.state.email,
      // subjects: this.state.subjects.forEach((sub)=>{
      //   return sub;
      // })
    })
    const userRef1 = db.collection("users").add({
      email: this.state.email,
      type:"Lecturer",
      password:"UCSC@123"

    });
    
    this.signup(this.state.email,"UCSC@123");
    
    this.setState({
     name:"",
     shortform:"",
     id:"",
     email:"",
     subjects:[],
    });
  }

  async signup(email,password){
    // var email=this.state.email
    // var password="UCSC@123"
    console.log(email);
    try {
      await Firebase.auth().createUserWithEmailAndPassword(email, password);
     // this.addLecturer();
      console.log("Account created");
    } catch (error) {
      console.log(error.toString())
    }
  }

  handleChange(value) {
    const subjects = this.state.subjects;
    subjects.push(value);
    this.setState({ subjects });
  }
  
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.addLecturer}>
          <MDBRow>
            <h4>Lecturer Register</h4>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Name
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
                Name in Short Form
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="shortform"
                onChange={this.updateInput}
                value={this.state.shortform}
             
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                ID
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="id"
                onChange={this.updateInput}
                value={this.state.id}
              
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
                Subjects
            </label>
            <Dropdown
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please Select"
              onChange={(val) => this.handleChange(val)}
              dbName="subjects"
              fieldName="code">
            >

            </Dropdown>
            </MDBCol>
            <MDBCol md="2">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >  
            </label>
            </MDBCol>
          </MDBRow>
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
        <hr></hr>
        <LecturerBulkRegistrationForm/>
      </MDBContainer>
    );
  }
}

export default Lecturer;