import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import GroupSearch from './GroupSearch';


const GroupDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Group Details</h4>
        <br></br>
      </MDBRow>
      <GroupSearch/> 
    </MDBContainer>
  );
}

export default GroupDetails;