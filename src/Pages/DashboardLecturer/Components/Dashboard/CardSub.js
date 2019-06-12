import React , { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase'

class SubjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:0,
      
    }
  }

 

  render(){
    return (
      <MDBCol>
        <MDBCard style={{ width: "12rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Subject 1</MDBCardTitle>
            <hr></hr>
            <MDBCardImage className="img-fluid" src="https://image.flaticon.com/icons/svg/67/67996.svg" waves />
            <hr></hr>
            <MDBCardTitle><span color='red'>55%</span></MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
export default SubjectCard; 