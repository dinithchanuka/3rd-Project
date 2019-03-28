import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import GroupSearch from './GroupSearch';
import GroupTable from './GroupTable'


const GroupDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Group Details</h4>
        <br></br>
      </MDBRow>
      <GroupSearch/> 
      <hr></hr>
      <GroupTable/>
    </MDBContainer>
  );
}

export default GroupDetails;