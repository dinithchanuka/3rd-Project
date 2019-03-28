import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import SubjectSearch from './SubjectSearch';
import SubjectTable from './SubjectTable';


const SubjectDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Subject Details</h4>
        <br></br>
      </MDBRow>
      <SubjectSearch/>
      <hr></hr>
      <SubjectTable/>
    </MDBContainer>
  );
}

export default SubjectDetails;