import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "12rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Students</MDBCardTitle>
          <hr></hr>
          <MDBCardImage className="img-fluid" src="https://img.icons8.com/material-two-tone/24/000000/classroom.png" waves />
          <MDBCardTitle>12536</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;