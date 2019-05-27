import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCollapse, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

import Criteria from './Criteria';

class Topic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4"><label>Topic</label></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="9">
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
              name="topicName"
              onChange={this.props.topicNameOnChange}
              value={this.props.topic.name}
            />
          </MDBCol>
          <MDBCol md="3">
            <Button type="primary" onClick={() => this.props.onDelete()}>Delete Topic</Button>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4"><label>Criteria</label></MDBCol>
          <MDBCol md="3"><label>For Now</label></MDBCol>
          <MDBCol md="3"><label>Method</label></MDBCol>
          <MDBCol md="2"><label></label></MDBCol>
        </MDBRow>
        {this.props.topic.criterias.map((criteria, idx) => (
          <Criteria
            key={'criteria-' + idx}
            onDelete={this.props.toDeleteCriteria(idx)}
            onFieldChange={this.props.onCriteriaChange(idx)}
            name={this.props.criterias[idx].name}
            forNow={this.props.criterias[idx].forNow}
          />
        ))}
        <MDBRow>
          <MDBCol md="6">
          </MDBCol>
          <MDBCol md="3">
            <Button type="primary" onClick={() => this.props.toAddCriteria()} >Add Criteria</Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }

}

export default Topic;