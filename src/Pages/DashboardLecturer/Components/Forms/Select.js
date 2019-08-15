import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import DropdownWhere from '../../../../Components/Dropdown/DropdownWhere';

import FormExist from './FormExist';

class CourseEva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     code:null,
     id:null,
     lecid:"",
     docid:"",
     name:"",
     by:"",
     responsible:"",
     year:"",
     option1:"",
     option2:"", 
     details:[],    
    };
    this.updateInput = this.updateInput.bind(this)
    this.addLecEva = this.addLecEva.bind(this)

  }

  componentDidMount(){
    
    var details = [];
    var userEmail = localStorage.getItem('userEmail');
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", userEmail);
    var lecref = Firebase.firestore().collection('lecturers')
    var lecquery = lecref.where("email","==",userEmail).get()
    .then(snapshot => {
      if (snapshot.empty) {
        // message
        // .loading('Action in progress...',1)
        // .th message.info('No matching document...'))
        console.log(">>>>>>>>>>>>>>EMPTY<<<<<<<<<<<<<<<<<");
        return;
      }
      // message
      // .loading('Action in progress...',1);

      snapshot.forEach((doc) =>{
        const {id,name} = doc.data();
        details.push({
          key:doc.id,
          id,
          name
        });
      });

      this.setState(prevState => ({
        docid:details[0].key,
        id:details[0].id,
        name:details[0].name
      }));
      console.log(userEmail)
      console.log("aa",this.state.id)
    })
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
      type: "Course",
    });

    this.handleForms();
  }
  handleForms = (e) => {
    e.preventDefault();
    console.log("handleForms")
    var db = Firebase.firestore()
    var ref = db.collection('lecevaforms').doc(this.state.code).collection('topics').doc('t-0')
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
    var Ref = Firebase.firestore().collection('lecevaform')
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
    if(this.state.id != null){
      return (
        <MDBContainer>
          <form onSubmit={this.handleForms}> 
            <MDBRow>
              <h4>Responsible Evaluation Forms</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Subject
                </label>
                <DropdownWhere
                  className="form-control" 
                  name="subid" 
                  default="(Please select the Subject)"
                  onChange={this.updateInput}
                  value={this.state.course}
                  dbName="subevadetails"
                  fieldName="code"
                  whereField="responsible"
                  whereOp="=="
                  whereValue={this.state.id}
                  >
                </DropdownWhere>
              </MDBCol>
              <MDBCol md="4">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Lecturer
                </label>
                <DropdownWhere 
                  className="form-control" 
                  name="lecid" 
                  default="(Please select the Lecturer)"
                  onChange={this.updateInput}
                  value={this.state.lecid}
                  dbName="lecevadetails"
                  fieldName="code"
                  whereField="responsible"
                  whereOp="=="
                  whereValue={this.state.id}
                  >
                </DropdownWhere>
              </MDBCol>
              <MDBCol md="4">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Course
              </label>
                <DropdownWhere 
                  className="form-control" 
                  name="courseid" 
                  default="(Please select the course)"
                  onChange={this.updateInput}
                  value={this.state.course}
                  dbName="courseevadetails"
                  fieldName="code"
                  whereField="responsible"
                  whereOp="=="
                  whereValue={this.state.id}
                  >
                </DropdownWhere>
              </MDBCol>
              
            </MDBRow>
            <MDBRow>
            <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="code"
                  onChange={this.updateInput}
                  value={this.state.code}
                />
            </MDBRow>
            
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                View Form
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
              <hr></hr>
            </div>
          </form>
  
          <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
            {console.log("1111111111111111111",this.state.lecid)}
            <FormExist evacode={this.state.lecid}></FormExist>
          </MDBCollapse>                 
  
        </MDBContainer>
      );  
    }
    else{
      return(
        <div>
          
        </div>
      )
    }
    
  };
};
export default CourseEva;

