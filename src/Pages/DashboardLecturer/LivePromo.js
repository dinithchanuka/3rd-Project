import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody,MDBCardText, MDBCol } from 'mdbreact';
import Firebase from '../../Components/Firebase/Firebase';
import DialogActions from '@material-ui/core/DialogActions';
import { message, Button } from 'antd';

import MessageCard from './Components/Dashboard/MessageCard';

export class LivePromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:0,
      open:true,
      details:[],
      docid:'',
      quiz:'',
      studentname:'',
      time:'',
      status:''
    };
  }
  componentDidMount = () => {
    console.log("aaaaaaaaaa")
    const details = [];
    var Ref = Firebase.firestore().collection('live')
    var query = Ref.where('status', '==',true).get()
    .then(snapshot => {
      if (snapshot.empty) {
        message
        .loading('Loading ...',1)
        return;
      }
      message
      .loading('Action in progress...',1);

      snapshot.forEach((doc) =>{
        const {quiz,studentname,time,status} = doc.data();
        details.push({
          key:doc.id,
          quiz,
          studentname,
          time,
          status
        });
      });
      this.setState(prevState => ({
        docid:details[0].key,
        quiz:details[0].quiz,
        studentname:details[1].studentname,
        time:details[1].time,
        status:details[0].status
      }));
      console.log("000", this.state.studentname)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
  };

  render() {
    return (
      <MDBCol>
        <MDBCard style={{ width: "12rem"  }}
          open={this.state.open}
          onClose={this.handleClose}>
          <MDBCardBody>
            <h5>{this.state.studentname}</h5>
            <MDBCardText>
              {this.state.quiz}
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

export default LivePromo;
