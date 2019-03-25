import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import StudentSearch from './StudentSearch';


const StudentDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Student Details</h4>
      </MDBRow>
      <StudentSearch/>
    </MDBContainer>
  );
}

export default StudentDetails;