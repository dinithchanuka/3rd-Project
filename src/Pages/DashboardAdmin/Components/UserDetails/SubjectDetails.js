import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import SubjectSearch from './SubjectSearch';


const SubjectDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Subject Details</h4>
        <br></br>
      </MDBRow>
      <SubjectSearch/>
    </MDBContainer>
  );
}

export default SubjectDetails;