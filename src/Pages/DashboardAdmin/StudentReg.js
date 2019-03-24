import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../Components/Firebase/Firebase';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     regnum:"",
     index:"",
     email:"",
     degree:"",
     year:""
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
      degree: this.state.degree,
      year: this.state.year
    }); 
    this.setState({
     name:"",
     regnum:"",
     index:"",
     email:"",
     degree:"",
     year:""
    });
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
                Degree
            </label>
            {/* <select 
              className="form-control" multiple
              name="degree"
              value={this.state.degree}
              onChange={this.updateInput}
              >
              <option value="Computer Science">Computer Science</option>
              <option value="Information System">Information System</option>
            </select> */}
            <select 
              className="form-control" 
              name="degree"
              value={this.state.degree}
              onChange={this.updateInput} multiple>
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            </MDBCol>
            <MDBCol md="2">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Group
            </label>
            <select 
              className="form-control"
              name="year"
              value={this.state.year}
              onChange={this.updateInput}
              >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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