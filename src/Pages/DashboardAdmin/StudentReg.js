import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <form>
        <MDBRow>
          <h4>Student Register</h4>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Student Name
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
          </MDBCol>
          <MDBCol md="3">
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Register Number
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
          </MDBCol>
          <MDBCol md="3">
            <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Index Number
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
          </MDBCol>
        </MDBRow>
        <br></br>
        <MDBRow>
          <MDBCol md="5">
          <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Email
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
            />
          </MDBCol>
          <MDBCol md="3">
          <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Degree
          </label>
          <select className="form-control">
            <option value="Computer Science">Computer Science</option>
            <option value="Information System">Information System</option>
          </select>
          </MDBCol>
          <MDBCol md="2">
          <label
              htmlFor="defaultFormCardNameEx"
              className="grey-text font-weight-light"
            >
              Year
          </label>
          <select className="form-control">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </MDBCol>
        </MDBRow>
        <div className="text-center py-4 mt-3">
          <MDBBtn className="btn btn-outline-purple" type="submit">
            Register
          <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </div>
      </form>
      <hr></hr>

      <form>
        <MDBRow>
          <h4>Bulk Registration</h4>
        </MDBRow>
        <MDBRow>
          <MDBCol md="5">
            <h6>Dowload the tempalate and Upload here . . .</h6>
          </MDBCol>
          <MDBCol md ="5">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
          </MDBCol>
        </MDBRow>
      <div className="text-center py-4 mt-3">
          <MDBBtn className="btn btn-outline-purple" type="submit">
            Submit
          <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </div>
      </form>
    </MDBContainer>
  );
};

export default FormPage;