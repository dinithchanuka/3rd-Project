import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import  Dropdown from '../../../../Components/Dropdown/Dropdown';

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     code:"",
     lechours:"",
     prachours:"",
     course:"",
     group:""
    };
    this.updateInput = this.updateInput.bind(this)
    this.addSubject = this.addSubject.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addSubject = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("subjects").add({
      name: this.state.name,
      code: this.state.code,
      lechours: this.state.lechours,
      prachours: this.state.prachours,
      course: this.state.course,
      group: this.state.group,
    }); 
    this.setState({
      name:"",
      code:"",
      lechours:"",
      prachours:"",
      course:"",
      group:"",
    });
  }
    render(){
      return (
        <MDBContainer>
          <form onSubmit={this.addSubject}>
            <MDBRow>
              <h4>Subject Register</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="7">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Subject Name
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.updateInput}
                  value={this.state.name}
                  required
                />
              </MDBCol>
              <MDBCol md="3">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Subject Code
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="code"
                  onChange={this.updateInput}
                  value={this.state.code}
                  required
                />
              </MDBCol>
              
            </MDBRow>
            <br></br>
            <MDBRow>
              <MDBCol md="2">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Lecture Hours
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="lechours"
                  onChange={this.updateInput}
                  value={this.state.lechours}
                  required
                />
              </MDBCol>
              <MDBCol md="2">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Practicle Hours
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="prachours"
                  onChange={this.updateInput}
                  value={this.state.prachours}
                />
              </MDBCol>
              <MDBCol md="4">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Course
              </label>
              <Dropdown 
                className="form-control" 
                name="course" 
                default="Select a Course"
                onChange={this.updateInput}
                value={this.state.course}
                dbName="courses"
                fieldName="code">
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
                default="Select a Group"
                onChange={this.updateInput}
                value={this.state.group}
                dbName="groups"
                fieldName="code">
              </Dropdown>

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
          <form>
            <MDBRow>
              <h4>Bulk Registration</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="5">
                <h6>Dowload the tempalate and Upload here . . .</h6>
              </MDBCol>
              <MDBCol md ="5">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
              </MDBCol>
            </MDBRow>
          <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Submit
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBContainer>
      );
    }; 
  }; 
export default Subject;