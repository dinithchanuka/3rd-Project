import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdown from '../../../../Components/Dropdown/Dropdown';

class LecturerEva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     code:"",
     lecid:"",
     by:"",
     responsible:"",
    };
    this.updateInput = this.updateInput.bind(this)
    this.addLecEva = this.addLecEva.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addLecEva = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("evadetails").add({
      name: this.state.lecid,
      code: this.state.code,
      by: this.state.by,
      responsible: this.state.responsible,
      type: "Lecturer",
    }); 
    this.setState({
      lecid:"",
      code:"",
      by:"",
      responsible:"",
    });
  }
  viewEvaForm = () => {
    var Ref = Firebase.firestore().collection('evaforms')
    var query = Ref.where('code', '==',this.state.code).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    this.setState({

       });
  }
    render(){
      return (
        <MDBContainer>
          <form onSubmit={this.addLecEva} onSubmit ={this.viewEvaForm}> 
            <MDBRow>
              <h4>Lecturer Evaluation</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="2">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Code
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
              <MDBCol md="3">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Lecturer ID
              </label>
              <Dropdown 
                  className="form-control" 
                  name="lecid" 
                  default="(Please select the student group)"
                  onChange={this.updateInput}
                  value={this.state.lecid}
                  dbName="lecturers"
                  fieldName="id">
              </Dropdown>
              </MDBCol>
              <MDBCol md="3">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Evaluated By
              </label>
              <Dropdown 
                  className="form-control" 
                  name="by" 
                  default="(Please select the student group)"
                  onChange={this.updateInput}
                  value={this.state.by}
                  dbName="groups"
                  fieldName="code">
              </Dropdown>
              </MDBCol>
              <MDBCol md="4">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Responsible
              </label>
              <Dropdown 
                  className="form-control" 
                  name="responsible" 
                  default="(Please select the student group)"
                  onChange={this.updateInput}
                  value={this.state.responsible}
                  dbName="lecturers"
                  fieldName="id">
              </Dropdown>
              </MDBCol>
            </MDBRow>
            
          <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                View Form
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBContainer>
      );
    }; 
  }; 
export default LecturerEva;