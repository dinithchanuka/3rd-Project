import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import StudentSearch from './StudentSearch';
import StudentTable from './StudentTable';


const StudentDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Student Details</h4>
        <br></br>
      </MDBRow>
      <StudentSearch/>
      <hr></hr>
      <StudentTable/>
    </MDBContainer>
  );
}

export default StudentDetails;