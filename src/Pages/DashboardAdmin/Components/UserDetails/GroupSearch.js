import React from "react";
import { Input } from 'antd';
import {MDBRow, MDBCol, MDBContainer,MDBBtn,MDBIcon,MDBCollapse} from 'mdbreact';

import Firebase from '../../../../Components/Firebase/Firebase';
import { message, Button } from 'antd';

let Search = Input.Search;

class GroupSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search:Input.Search,
      details:[],
      docid:'',
      code:'',
      name:'',
    }
  }

  handleGroup = (value) => {
    const collapseID = "grouphandle";
    const details = [];
    var groupRef = Firebase.firestore().collection('groups')
    var query = groupRef.where('code','==',value).get()
    .then(snapshot =>{
      if (snapshot.empty){
        message
        .loading('Action in progress...',1)
        .then(()=> message.info('No matching document...',2))

        return;
      }
      message
      .loading('Action in progress...',1);

      snapshot.forEach((doc) => {
        const {code,name} = doc.data();
        details.push({
          key:doc.id,
          code,
          name
        });
      });
      
      this.setState(PrevState => ({
        collapseID: PrevState.collapseID !== collapseID,
        docid:details[0].key,
        code:details[0].code,
        name:details[0].name
      }));
      console.log(this.state.code)
    })
    .catch(err => {
      console.log('Error getting document',err);
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({groups:state})
  }

  updateDetails = (e) => {

    e.preventDefault();
    const db = Firebase.firestore();

    const groupRef = db.collection("groups").doc(this.state.docid);
    groupRef.set({
      name:this.state.name,
      code:this.state.code
    });

    db.collection("groups").doc(this.state.docid).update({
      name:this.state.name==""?this.state.name:this.state.name,
      code:this.state.code==""?this.state.code:this.state.code
    })
    .then(function(){
      message
      .loading('Action in progress...',1)
      .then(() => message.success('Successfully Updated...'))
    });
  }

  deleteDetails = (e) => {
    e.preventDefault();
    const db = Firebase.firestore();
    const groupRef = db.collection("groups").doc(this.state.docid).delete();

    message
    .loading('Action in progress...',0.75)
    .then(() => message.success("Successfully Deleted...",1.5))
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
            placeholder=""
            enterButton="Search"
            size="large"
            onSearch={value => this.handleGroup(value)}>
          </Search>
          </MDBCol>
          <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <form onSubmit={this.updateDetails}>
            <MDBRow>
            <MDBCol md="4">
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
                onChange={this.onChange}
                value={this.state.name}
              />
            </MDBCol>
            <MDBCol md="2">
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
    );
    console.log(Search)
  }
}

export default GroupSearch;