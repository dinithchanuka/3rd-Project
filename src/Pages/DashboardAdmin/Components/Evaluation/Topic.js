import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

import Criteria from './Criteria';

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         code:"",
         lecid:"",
         by:"",
         shareholders: [{ name: "" }]
        };
    }
    handleAddShareholder = () => {
        this.setState({
          shareholders: this.state.shareholders.concat([{ name: "" }])
        });
    };
    handleRemoveShareholder = idx => () => {
        this.setState({
          shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    };

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md = "4"><label>Topic</label></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md ="9">
                        <input
                            type="text"
                            id="defaultFormCardNameEx"
                            className="form-control"
                            name="name"
                            onChange={this.updateInput}
                            // value={this.state.topic1}
                        />
                    </MDBCol>
                    <MDBCol md ="3">
                        <Button type="primary">Delete Topic</Button>
                    </MDBCol>
                </MDBRow>   
                <MDBRow>
                    <MDBCol md = "4"><label>Criteria</label></MDBCol>
                    <MDBCol md = "3"><label>For Now</label></MDBCol>
                    <MDBCol md = "3"><label>Method</label></MDBCol>
                    <MDBCol md = "2"><label></label></MDBCol>
                </MDBRow>
                {this.state.shareholders.map((shareholder, idx) => (
                    <div>
                        <Criteria></Criteria>
                    </div>
                ))}
                <MDBRow>
                    <MDBCol md = "6">
                    </MDBCol>
                    <MDBCol md = "3">
                        <Button type="primary" onClick={this.handleAddShareholder} >Add Criteria</Button>
                    </MDBCol>
                </MDBRow>      
            </MDBContainer>
        )
    }
   
}

export default Topic;