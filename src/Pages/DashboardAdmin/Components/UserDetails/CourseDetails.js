import React from "react";
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';
import CourseSearch from './CourseSearch';
import CourseTable from './CourseTable';


const CourseDetails = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <h4>Course Details</h4>
        <br></br>
      </MDBRow>
      <CourseSearch/>
      <CourseTable/>
    </MDBContainer>
  );
}

export default CourseDetails;