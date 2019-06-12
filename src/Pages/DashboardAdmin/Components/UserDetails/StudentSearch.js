import React from "react";
import { Input } from 'antd';
import {MDBRow, MDBCol, MDBContainer} from 'mdbreact';

const Search = Input.Search;

const SearchPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md ="4">
        <label>
            Search by Reg Num
        </label>
        <br></br>
        <Search
          placeholder=""
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}>
        </Search>
        </MDBCol>

        <MDBCol md="4">
        <label>
            Search by Index Num
        </label>
        <br></br>
        <Search
          placeholder=""
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}>
        </Search>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SearchPage;