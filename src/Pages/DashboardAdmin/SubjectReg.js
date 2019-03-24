import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../Components/Firebase/Firebase';

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     code:"",
     lechours:"",
     prachours:"",
     course:"",
     year:""
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
      year: this.state.year,
    }); 
    this.setState({
      name:"",
      code:"",
      lechours:"",
      prachours:"",
      course:"",
      year:"",
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
              <select 
                className="form-control" 
                name="course"
                value={this.state.course}
                onChange={this.updateInput}
                >
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information System">Information System</option>
              </select>
              </MDBCol>
              <MDBCol md="2">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Year
              </label>
              <select 
                className="form-control"
                name="year"
                value={this.state.year}
                onChange={this.updateInput}
                >
                <option value=""></option>
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
    }; 
  }; 
export default Subject;