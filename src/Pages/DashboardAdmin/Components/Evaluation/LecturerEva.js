import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

import FormExist from './FormExist';
import FormNew from './FormNew';

class LecturerEva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     code:"",
     lecid:"",
     by:"",
     responsible:"",
     year:"",
     option1:"",
     option2:"",
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
      year:this.state.year,
      type: "Lecturer",
    }); 

    // const userRef1 = db.collection("evaforms").doc(this.state.code).set({
    // });

    // this.setState({
    //   lecid:"",
    //   code:"",
    //   by:"",
    //   responsible:"",
    //   year:"",
    // });
    this.viewEvaForm();
  }
  viewEvaForm = () => {
    const collapseID = "basicCollapse";
    const details = [];
    var Ref = Firebase.firestore().collection('evaforms')
    var query = Ref.where('code', '==',this.state.code).get()
    .then(snapshot => {
      if (snapshot.empty) {
        this.createForm();
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach((doc) =>{
        const {code,option1,option2} = doc.data();
        details.push({
          key:doc.id,
          code,
          option1,
          option2
        });
      });
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ,
        code:details[0].code,
      
      }));
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  createForm = () => {
    const collapseID1 = "basicCollapse1";
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ,
    }));
  }
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.addLecEva}> 
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
            <MDBCol md="2">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Year
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="year"
                onChange={this.updateInput}
                value={this.state.year}
               
              />
            </MDBCol>
            <MDBCol md="2">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Lecturer ID
            </label>
              <Dropdowns 
                className="form-control" 
                name="lecid" 
                default="(Please select the course)"
                onChange={this.updateInput}
                value={this.state.course}
                dbName="lecturers"
                fieldName="id">
              </Dropdowns>
            </MDBCol>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Evaluated By
            </label>
            <Dropdowns
                className="form-control" 
                name="by" 
                default="(Please select the student group)"
                onChange={this.updateInput}
                value={this.state.by}
                dbName="groups"
                fieldName="code">
            </Dropdowns>
            </MDBCol>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Responsible
            </label>
            <Dropdowns 
                className="form-control" 
                name="responsible" 
                default="(Please select the student group)"
                onChange={this.updateInput}
                value={this.state.responsible}
                dbName="lecturers"
                fieldName="id">
            </Dropdowns>
            </MDBCol>
          </MDBRow>
          
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              View Form
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>

         <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <FormExist></FormExist>
         </MDBCollapse>

        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
          <FormNew evacode={this.state.code}></FormNew>
        </MDBCollapse>

      </MDBContainer>
    );  
  };
};
export default LecturerEva;

