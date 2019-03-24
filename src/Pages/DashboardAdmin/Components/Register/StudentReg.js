import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import  Dropdown from '../../../../Components/Dropdown/Dropdown';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     regnum:"",
     index:"",
     email:"",
     course:"",
     group:""
    };
    this.updateInput = this.updateInput.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addStudent = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("students").add({
      name: this.state.name,
      regnum: this.state.regnum,
      index: this.state.index,
      email: this.state.email,
      course: this.state.course,
      group: this.state.group
    }); 
    this.setState({
     name:"",
     regnum:"",
     index:"",
     email:"",
     course:"",
     group:""
    });
  }

  getCourses(){
    var courses = [];
    const db = Firebase.firestore();
    db.collection("courses")
    .onSnapshot(function(courseList) {
      courseList.forEach(function(doc) {
          courses.push(doc.data().name);
      });
    });
    return courses;
  }

  getCoursesList() {
    const courses = this.getCourses();
    console.log(courses);
    return courses.map(course=>{
      return (<option key={course} value={course}>{course}</option>);
    })
  }
  
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.addStudent}>
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
                type="text"
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
  }
}

export default Student;