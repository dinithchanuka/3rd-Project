import React, { Component } from 'react'
import Switch from "react-switch";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact'

export class Sounds extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(checked) {
        this.setState({ checked });
      }
  render() {
    const checked=this.state.checked;
    if(checked){
        console.log("live promo active");
    }
    else{
        console.log("live promo disable");
    }
    return (
        
      <div class="text-left">
        <MDBRow><p></p></MDBRow> 
        <MDBRow>
          
          <MDBCol md="10">
            <label htmlFor="normal-switch">
              <p><b>Sounds not clear</b></p>
              
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

export default Sounds;
