import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';

import Reports from './Reports'
import ReportInputs from './ReportInputs';

const Index = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Genarated Reports</h4>
        <br></br>
      </MDBRow>
      <ReportInputs></ReportInputs>
      <hr></hr>
    </MDBContainer>
  );
}

export default Index;