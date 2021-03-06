import React , { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase'

class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:0,
    }
  }

  componentWillMount(){
    this.getCount();
  }
  
  getCount = () => {
    const details = [];
    var Ref = Firebase.firestore().collection('courses')
    var query = Ref.get()
    .then(snapshot => {
      const size = snapshot.size;

      this.setState({
        size
      })
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  render(){
    return (
      <MDBCol>
        <MDBCard style={{ width: "12rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Courses</MDBCardTitle>
            <hr></hr>
            <MDBCardImage className="img-fluid" src="https://image.flaticon.com/icons/svg/67/67634.svg" waves />
            <hr></hr>
            <MDBCardTitle>{this.state.size}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
export default CourseCard; 