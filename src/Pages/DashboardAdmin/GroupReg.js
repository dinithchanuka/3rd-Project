import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../Components/Firebase/Firebase';

class Group extends React.Component {
  constructor() {
    super();
    this.state = {
     name:"",
     code:"",
    };
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addCourse = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("groups").add({
      name: this.state.name,
      code: this.state.code,
    }); 
    this.setState({
      name:"",
      code:"",
    });
  }
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.addCourse}>
          <MDBRow>
            <h4>Student Group Register</h4>
          </MDBRow>
          <br></br>
          <MDBRow>
            <MDBCol md="7">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Group Name
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
                Group Code
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
          <br></br>
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

export default Group;