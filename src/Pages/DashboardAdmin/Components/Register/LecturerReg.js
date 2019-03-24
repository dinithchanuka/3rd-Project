import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import  Dropdown from '../../../../Components/Dropdown/DropdownMultiple';
//import { Select } from 'antd';

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
      subjects: this.state.subjects
    }); 
    this.setState({
     name:"",
     shortform:"",
     id:"",
     email:"",
     subjects:[],
    });
  }

  handleChange(value) {
    const subjects = this.state.subjects;
    subjects.push('${value}');
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

export default Lecturer;