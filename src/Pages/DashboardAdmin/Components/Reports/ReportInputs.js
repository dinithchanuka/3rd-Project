import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';
import Reports from './Reports';
import Reports1 from './Reports1';

class ReportInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     course:"",     
    };
    this.updateInput = this.updateInput.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  viewForm = e => {
    e.preventDefault();
    const collapseID1 = "basicCollapse1";
    console.log("view form")
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ,
    }));
  }
  
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.viewForm}> 
          <MDBRow>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Lecturer ID
            </label>
            </MDBCol>
            <MDBCol md="6">
              <Dropdowns 
                className="form-control" 
                name="lecid" 
                default="Select a Lecturer ID"
                onChange={this.updateInput}
                value={this.state.course}
                dbName="lecturers"
                fieldName="id">
              </Dropdowns>
            </MDBCol>
          </MDBRow>
          
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Confirm
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
            <hr></hr>
          </div>
        </form>

        
         
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>

        </MDBCollapse>

        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
            <Reports></Reports>
            <hr></hr>
            <Reports1></Reports1>
        </MDBCollapse>
                 

      </MDBContainer>
    );  
  };
};
export default ReportInputs;

