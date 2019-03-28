import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import LecturerSearch from './LecturerSearch';
import LecturerTable from './LecturerTable';


const LecturerDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Lecturer Details</h4>
        <br></br>
      </MDBRow>
        <LecturerSearch/>
        <hr></hr>
        <LecturerTable></LecturerTable>
    </MDBContainer>
  );
}

export default LecturerDetails;