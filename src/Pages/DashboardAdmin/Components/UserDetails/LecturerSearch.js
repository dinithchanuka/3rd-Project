import React from "react";
import { MDBCol, MDBFormInline, MDBBtn,MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-2" type="text" placeholder="Search by Index" aria-label="Search" />
        <MDBBtn className="btn btn-outline-purple" type="submit">
            Search
          <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;