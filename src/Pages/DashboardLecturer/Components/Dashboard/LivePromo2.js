import React , { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';

class SubjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:0,
      open:true
    }
  }

  handleClickOpen = () => {
      this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
  };
    
 

  render(){
    return (
      <MDBCol>
        <MDBCard style={{ width: "12rem"  }}
        open={this.state.open}
        onClose={this.handleClose}>
          <MDBCardBody>
            <h5>Chanuka        10:31</h5>
            <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the cards content.
          </MDBCardText>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Solved
            </Button>
          </DialogActions>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
export default SubjectCard; 