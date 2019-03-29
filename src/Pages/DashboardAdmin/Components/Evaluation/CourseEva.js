import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';

class CourseEva extends React.Component {
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
              <h4>Subject Evaluation</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">
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
              <MDBCol md="4">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Evaluated by
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
              <MDBCol md="4">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Responsible
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
                Submit
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBContainer>
      );
    }; 
  }; 
export default CourseEva;