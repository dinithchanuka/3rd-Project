import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCol, MDBRow } from 'mdbreact';

import Select from './Select'



class Forms extends Component {
  
  render() {
    return (
      <MDBRow>

        <MDBRow>
          <MDBCol>
              <Select></Select>
          </MDBCol>
        </MDBRow> 
      
        <MDBRow>
          <MDBCol>
        
          </MDBCol>
        </MDBRow> 

      </MDBRow>
    );
  }
}

export default Forms;    