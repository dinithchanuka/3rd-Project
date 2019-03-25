import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import LecturerSearch from './LecturerSearch';


const LecturerDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Lecturer Details</h4>
        <br></br>
      </MDBRow>
        <LecturerSearch/>
    </MDBContainer>
  );
}

export default LecturerDetails;