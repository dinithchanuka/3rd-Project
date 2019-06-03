import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import Statistis from './Statistic';
import Cards from './Card';
import RecipeReviewCard from './Cardz';


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
            <RecipeReviewCard></RecipeReviewCard>
          </MDBCol>
        </MDBRow> 

      </MDBRow>
    );
  }
}

export default Dashboard;    