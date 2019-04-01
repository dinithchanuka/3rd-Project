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
              <h2 className="h1 display-3">Hello, world!</h2>
              <p className="lead">
                This is a simple hero unit, a simple Jumotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
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