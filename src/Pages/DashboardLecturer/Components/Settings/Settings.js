import React, { Component } from "react";
import Switch from "react-switch";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact'
import Livepromo from './LivePromo';
import Notifications from './Notifications';

class Settings extends Component {
  
render() {
    return (

      <MDBContainer>
        <MDBCard>
        <div >
         <Livepromo></Livepromo>
         <Notifications></Notifications>

        {/* <MDBRow>
        <MDBCol md="1"></MDBCol>
          <MDBCol md="8">
            <label htmlFor="normal-switch">
              <p><b>Live Promo</b></p>
            </label>
          </MDBCol>
          <MDBCol>
          <p><Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  id="normal-switch"
                /></p>
          
          </MDBCol>
        </MDBRow>

        <MDBRow>
        <MDBCol md="1"></MDBCol>
          <MDBCol md="8">
            <label htmlFor="normal-switch">
              <p><b>Live Promo</b></p>
            </label>
          </MDBCol>
          <MDBCol>
          <p><Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  id="normal-switch"
                /></p>
          
          </MDBCol>
        </MDBRow>

        <MDBRow>
        <MDBCol md="1"></MDBCol>
          <MDBCol md="8">
            <label htmlFor="normal-switch">
              <p><b>Live Promo</b></p>
            </label>
          </MDBCol>
          <MDBCol>
            <p><Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  id="normal-switch"
                /></p>
          
          </MDBCol>
        </MDBRow> */}
        </div>
        
        </MDBCard>
      </MDBContainer>

    );
  }
}

export default Settings;