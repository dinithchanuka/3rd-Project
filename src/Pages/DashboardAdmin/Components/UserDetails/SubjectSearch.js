import React from "react";
import { Input } from 'antd';
import {MDBRow, MDBCol, MDBContainer,MDBBtn,MDBIcon,MDBCollapse} from 'mdbreact';

import Firebase from '../../../../Components/Firebase/Firebase';
import { message, Button } from 'antd';

let Search = Input.Search;

class CourseSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search:Input.Search,
      details:[],
      docid:'',
      code:'',
      name:'',
      course:'',
      group:'',
      lechours:'',
      prachours:''
    }
  }

  handleCourse = (value) => {
    const collapseID = "basicCollapse";
    const details = [];
    var Ref = Firebase.firestore().collection('subjects')
    var query = Ref.where('code', '==',value).get()
    .then(snapshot => {
      if (snapshot.empty) {
        message
        .loading('Action in progress...',1)
        .then(()=> message.info('No matching document...'))

        return;
      }
      message
      .loading('Action in progress...',1);

      snapshot.forEach((doc) =>{
        const {code,name,course,group,lechours,prachours} = doc.data();
        details.push({
          key:doc.id,
          code,
          name,
          course,
          group,
          lechours,
          prachours
        });
      });

      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ,
        docid:details[0].key,
        code:details[0].code,
        name:details[0].name,
        course:details[0].course,
        group:details[0].group,
        lechours:details[0].lechours,
        prachours:details[0].prachours
      }));
      console.log(this.state.code)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({courses:state})
  }
  
  updateDetails = (e) => {

    e.preventDefault();
    const db = Firebase.firestore();
    
    const courseRef = db.collection("subjects").doc(this.state.docid);
    courseRef.set({
      name:this.state.name,
      code:this.state.code,
      course:this.state.course,
      group:this.state.group,
      lechours:this.state.lechours,
      prachours:this.state.prachours
    });

    db.collection("courses").doc(this.state.docid).update({
      name:this.state.name==""?this.state.name:this.state.name,
      code:this.state.code==""?this.state.code:this.state.code,
      course:this.state.course==""?this.state.course:this.state.course,
      group:this.state.group==""?this.state.group:this.state.group,
      lechours:this.state.lechours==""?this.state.lechours:this.state.lechours,
      prachours:this.state.prachours==""?this.state.prachours:this.state.prachours
    })
    .then(function(){
      message
      .loading('Action in progress...',1)
      .then(()=> message.success('Successfully updated...'),1)
    });
  }
  deleteDetails = (e) => {
    e.preventDefault();
    const db = Firebase.firestore();
    const courseRef = db.collection("courses").doc(this.state.docid).delete();

    message
    .loading('Action in progress...',0.75)
    .then(()=> message.success('Successfully deleted...'),1.5)
  }
  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md ="3">
        <label>
          Search by Code
        </label>
        <br></br>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => this.handleCourse(value)}>
        </Search>
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <form onSubmit={this.updateDetails}>
            <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Course Name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </MDBCol>
            <MDBCol md="2">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Course Code
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="code"
                onChange={this.onChange}
                value={this.state.code}
              />
            </MDBCol>
            <MDBCol>
              <MDBBtn className="btn btn-outline-purple" type="submit">
                Save
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBCol>
            <MDBCol>
              <MDBBtn className="btn btn-outline-purple" type=""
                onClick={this.deleteDetails}>
                Delete
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBCol>
            </MDBRow>
          </form>
        </MDBCollapse>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default CourseSearch;