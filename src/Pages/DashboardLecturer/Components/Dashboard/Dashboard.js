import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import SubCard from './CardSub';


class Dashboard extends Component {
  
  render() {
    return (
      <MDBRow>

        <MDBRow>
          <MDBCol>
          </MDBCol>
        </MDBRow> 
      
        <MDBRow>
          <MDBCol>
            <SubCard></SubCard>
          </MDBCol>
        </MDBRow> 

      </MDBRow>
    );
  }
}

export default Dashboard;    