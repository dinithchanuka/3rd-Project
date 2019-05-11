import React, { Component } from 'react'
import Switch from "react-switch";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact'

export class Notifications extends Component {
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
      <div class="text-left">
        <MDBRow><p></p></MDBRow> 
        <MDBRow>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="8">
            <label htmlFor="normal-switch">
              <p><b>Notifications</b></p>
              <p>If you don't need live promo in the lecture time you can disable it.</p>
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
      </div>
    )
  }
}

export default Notifications
