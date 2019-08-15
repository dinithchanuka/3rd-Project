import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';


class SubjectFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     code:null,
     lecid:"",
     by:"",
     responsible:"",
     year:"",     
    };
    this.updateInput = this.updateInput.bind(this)
    this.addCourseEva = this.addCourseEva.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addCourseEva = e => {    
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("courseevadetails").add({
      name: this.state.lecid,
      code: this.state.code,
      by: this.state.by,
      responsible: this.state.responsible,
      year:this.state.year,
      type: "Course",
    });

    this.handleForms();
  }
  handleForms = () => {
    var db = Firebase.firestore()
    var ref = db.collection('courseevaforms').doc(this.state.code).collection('topics').doc('t-0')
    var getDoc = ref.get()
    .then(doc => {
      if(!doc.exists){
        console.log('new')
        this.createNewForm();
        
      }else{
        console.log('old')
        this.viewExistForm();
      }
      console.log(doc);
    })
  }
  viewEvaForm = () => {
    
    const collapseID = "basicCollapse";
    const details = [];
    var Ref = Firebase.firestore().collection('courseevaform')
    var query = Ref.where('code', '==',this.state.code).get()
    .then(snapshot => {
      if (snapshot.empty) {
        this.createForm();
        console.log(this.state.code);
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
  createNewForm = () => {
    const collapseID1 = "basicCollapse1";
    console.log("create new form")
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ,
    }));
  }
  viewExistForm = () => {
    const collapseID = "basicCollapse";
    console.log("view exist form")

    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ,
    }));
  }
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.addCourseEva}> 
          <MDBRow>
            <h4>Subject Feedbacks</h4>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Subject Code
            </label>
            </MDBCol>
            <MDBCol md="6">
              <Dropdowns 
                className="form-control" 
                name="lecid" 
                default="Select a Course"
                onChange={this.updateInput}
                value={this.state.course}
                dbName="subjects"
                fieldName="code">
              </Dropdowns>
            </MDBCol>
          </MDBRow>
          
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Confirm
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
            <hr></hr>
          </div>
        </form>

        
         
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          
        </MDBCollapse>

        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
          
        </MDBCollapse>
                 

      </MDBContainer>
    );  
  };
};
export default SubjectFeedback;

