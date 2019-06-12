import React, { Component } from 'react'
import {  MDBBtn, MDBIcon } from 'mdbreact';
import LivePromo1 from './Components/Dashboard/LivePromo'
import LivePromo2 from './Components/Dashboard/LivePromo2'


export class LivePromo extends Component {
    render() {
        return (
            // <div>
            // {/* //     <div className="panel panel-default">
            // //         <div className="panel panel-default post-editor">
            // //             <div className="panel-body">
            // //                 <textarea className="form-control post-editor-input" />
            // //                 <MDBBtn className="btn btn-outline-purple" type="submit" 
            //   // onClick={this.setRedirect}
            // //   >
            // //   send
            // // <MDBIcon far icon="paper-plane" className="ml-2" />
            // // </MDBBtn>
                            
            // //             </div>
            // //         </div>
            // //     </div> */}
            // </div>
            <div>
                <div>
                    <LivePromo1></LivePromo1>
                </div>
                <br></br>
                <div>
                <LivePromo2></LivePromo2>
                </div>
            </div>
            
            
            
        )
    }
}

export default LivePromo
