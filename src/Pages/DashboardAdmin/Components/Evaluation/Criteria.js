import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

class Criteria extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                <MDBCol md = "4">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.props.onFieldChange('name')}
                  value={this.props.name}
                  />
                </MDBCol>
                <MDBCol md = "3">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="for-now"
                  onChange={this.props.onFieldChange('forNow')}
                  value={this.props.forNow}
                  />
                </MDBCol>
                <MDBCol md = "3">
                  <select className="form-control" onChange={this.props.onFieldChange('method')}>
                    <option value="1-5">1 to 5</option>
                    <option value="text">Text</option>
                  </select>
                </MDBCol>
                <MDBCol md = "2">
                  <Button type="primary" onClick={() => this.props.onDelete()}>Delete Criteria</Button>
                </MDBCol>
              </MDBRow>
              <br></br>
            </MDBContainer>
        )
    }
}
export default Criteria;