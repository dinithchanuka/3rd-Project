import React, { Component } from "react";
import Switch from "react-switch";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact'
import Livepromo from './LivePromo';
import Notifications from './Notifications';
import Slides from './Infrastructure/Slides';
import Sounds from './Infrastructure/Sounds';
import WhiteBoard from './Infrastructure/WhiteBoard';

class Settings extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

render() {
    return (

      <MDBContainer>
        <MDBCard>
        <div >
         <Livepromo></Livepromo>
         <Notifications></Notifications>
         <div class="text-left">
        <MDBRow><p></p></MDBRow> 
        <MDBRow>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="8">
            <label htmlFor="normal-switch">
              <p><b>Infrastructure Issues</b></p>
              <p>**Keep showing notifications during the lecture time.</p>
            </label>
          </MDBCol>
          <MDBCol>
          <p><Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  id="normal-switch"
                /></p>
          
          </MDBCol>
          <MDBCol md="2"></MDBCol>
              <MDBCol md="8">
                <Slides></Slides>
                <Sounds></Sounds>
                <WhiteBoard></WhiteBoard>
              </MDBCol>
        </MDBRow>
      </div>

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