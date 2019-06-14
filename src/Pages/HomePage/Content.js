import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Login from './Login/Login'

class Content extends Component{
  state = {
    login : false
  }
  handleClick = () => {
    const Login = this.state.Login;
    this.setState(state => ({login:true}));
  }
  render(){
    let LoginView;

    if(this.state.login=true){
      LoginView = (
        <div>
          <Login/>
        </div>
      )
    }
    return (
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h4 className="h1 display-3">UCSC</h4>
              <p className="lead">
                Be a Global Leader in Computing, Advancing the Frontiers of new knowledge through Learning and Research.
                To advance and enhance computing knowledge, fostering global strategic alliances, promoting cross disciplinary research, producing socially responsible professionals with entrepreneurial skills, leadership qualities and integrity contributing  to  position the country as a knowledge hub in the region.
              </p>
              <hr className="my-2" />
              <p>
                A platform that can measure your insititute performance.
              </p>
              <p className="lead">
                {LoginView}
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}



export default Content;