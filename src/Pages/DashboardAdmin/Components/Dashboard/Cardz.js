import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "12rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Students</MDBCardTitle>
          <hr></hr>
          <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
          <MDBCardTitle>12536</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;