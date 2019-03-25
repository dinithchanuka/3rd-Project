import React from "react";
import { Input } from 'antd';
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';

const Search = Input.Search;

const GroupSearch = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md ="4">
        <label>
            Search by Code
        </label>
        <br></br>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}>
        </Search>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default GroupSearch;