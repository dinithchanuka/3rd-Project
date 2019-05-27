import React from "react";
import { Input } from 'antd';
import {MDBRow, MDBCol, MDBContainer,MDBBtn,MDBIcon,MDBCollapse} from 'mdbreact';

import Firebase from '../../../../Components/Firebase/Firebase'

let Search = Input.Search;

class CourseSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search:Input.Search,
      code:"",
      name:"",
      
    }
  }

  handleCourse = (value) => {
    const collapseID = "basicCollapse";
    const details = [];
    var Ref = Firebase.firestore().collection('courses')
    var query = Ref.where('code', '==',value).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
  
      snapshot.forEach((doc) =>{
        const {code,name} = doc.data();
        details.push({
          key:doc.id,
          code,
          name
        });
      });

      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ,
        code:details[0].code,
        name:details[0].name
      }));
      console.log(this.state.code)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
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
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <form>
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
                onChange={this.updateInput}
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
                name="name"
                onChange={this.updateInput}
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
              <MDBBtn className="btn btn-outline-purple" type="submit">
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