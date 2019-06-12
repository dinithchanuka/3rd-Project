import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import Statistis from './Statistic';
import Cards from './Card';
import StudentCard from'./CardStu';
import LecturerCard from'./CardLec';
import SubCard from './CardSub';
import CourseCard from './CardCourse';
import GroupCard from './CardGroup'

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
            <StudentCard></StudentCard>
          </MDBCol>
          <MDBCol>
            <LecturerCard></LecturerCard>
          </MDBCol>
          <MDBCol>
            <SubCard></SubCard>
          </MDBCol>
          <MDBCol>
            <CourseCard></CourseCard>
          </MDBCol>
          {/* <MDBCol>
            <GroupCard></GroupCard>
          </MDBCol> */}
        </MDBRow> 

      </MDBRow>
    );
  }
}

export default Dashboard;    