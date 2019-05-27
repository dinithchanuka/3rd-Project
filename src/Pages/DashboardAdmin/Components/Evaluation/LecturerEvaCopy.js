import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

class LecturerEva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     code:"",
     lecid:"",
     by:"",
     responsible:"",
     year:"",
     option1:"",
     option2:"",
     shareholders: [{ name: "" }],
     shareholders1: [{ name: "" }]
    };
    this.updateInput = this.updateInput.bind(this)
    this.addLecEva = this.addLecEva.bind(this)
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addLecEva = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("evadetails").add({
      name: this.state.lecid,
      code: this.state.code,
      by: this.state.by,
      responsible: this.state.responsible,
      year:this.state.year,
      type: "Lecturer",
    }); 
    this.setState({
      lecid:"",
      code:"",
      by:"",
      responsible:"",
      year:"",
    });
    this.viewEvaForm();
  }
  viewEvaForm = () => {
    const collapseID = "basicCollapse";
    const details = [];
    var Ref = Firebase.firestore().collection('evaforms')
    var query = Ref.where('code', '==',this.state.code).get()
    .then(snapshot => {
      if (snapshot.empty) {
        this.createForm();
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach((doc) =>{
        const {code,option1,option2} = doc.data();
        details.push({
          key:doc.id,
          code,
          option1,
          option2
        });
      });
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ,
        code:details[0].code,
        option1:details[0].option1,
        option2:details[0].option2
      }));
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    this.setState({

       });
  }
  createForm = () => {
    const collapseID1 = "basicCollapse1";
    this.setState(prevState => ({
      collapseID1: prevState.collapseID1 !== collapseID1 ,
    }));
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
  handleAddShareholder1 = () => {
    this.setState({
      shareholders1: this.state.shareholders1.concat([{ name: "" }])
    });
  };
  handleRemoveShareholder1 = idx1 => () => {
    this.setState({
      shareholders1: this.state.shareholders1.filter((s1, sidx1) => idx1 !== sidx1)
    });
  };
    render(){
      return (
        <MDBContainer>
          <form onSubmit={this.addLecEva}> 
            <MDBRow>
              <h4>Lecturer Evaluation</h4>
            </MDBRow>
            <MDBRow>
              <MDBCol md="2">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Code
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="code"
                  onChange={this.updateInput}
                  value={this.state.code}
                 
                />
              </MDBCol>
              <MDBCol md="2">
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Year
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="year"
                  onChange={this.updateInput}
                  value={this.state.year}
                 
                />
              </MDBCol>
              <MDBCol md="2">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Lecturer ID
              </label>
                <Dropdowns 
                  className="form-control" 
                  name="lecid" 
                  default="(Please select the course)"
                  onChange={this.updateInput}
                  value={this.state.course}
                  dbName="lecturers"
                  fieldName="id">
                </Dropdowns>
              </MDBCol>
              <MDBCol md="3">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Evaluated By
              </label>
              <Dropdowns
                  className="form-control" 
                  name="by" 
                  default="(Please select the student group)"
                  onChange={this.updateInput}
                  value={this.state.by}
                  dbName="groups"
                  fieldName="code">
              </Dropdowns>
              </MDBCol>
              <MDBCol md="3">
              <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Responsible
              </label>
              <Dropdowns 
                  className="form-control" 
                  name="responsible" 
                  default="(Please select the student group)"
                  onChange={this.updateInput}
                  value={this.state.responsible}
                  dbName="lecturers"
                  fieldName="id">
              </Dropdowns>
              </MDBCol>
            </MDBRow>
            
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="submit">
                View Form
              <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>

          <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
            <form>
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
                    value={this.state.topic1}
                  />
                </MDBCol>
                <MDBCol md ="3">
                  <Button type="primary" >Delete Topic</Button>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md = "5"><label>Criteria</label></MDBCol>
                <MDBCol md = "2"><label>For Now</label></MDBCol>
                <MDBCol md = "2"><label>Method</label></MDBCol>
                <br></br>
              </MDBRow>
              <MDBRow>
                <MDBCol md = "5">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.updateInput}
                  value={this.state.option1}
                  />
                </MDBCol>
                <MDBCol md = "2">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.updateInput}
                  value={this.state.option2}
                  />
                </MDBCol>
                <MDBCol md = "2">
                  <select className="form-control">
                    <option value="1-5">1 to 5</option>
                    <option value="text">Text</option>
                  </select>
                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary">Delete Criteria</Button>
                </MDBCol>
              </MDBRow>
              <br></br>
              <MDBRow>
                <MDBCol md = "6">

                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary" >Add Criteria</Button>
                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary" >Add Topic</Button>
                </MDBCol>
              </MDBRow>
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                  Submit
                <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCollapse>

          <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
              <form>
                <h5 color="red">Evaluation Form is not included...</h5>
                <div>
                  {this.state.shareholders.map((shareholder, idx) => (
                    <div>
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
                            value={this.state.topic1}
                          />
                        </MDBCol>
                        <MDBCol md ="3">
                          <Button type="primary" onClick={this.handleRemoveShareholder(idx)}>Delete Topic</Button>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md = "4"><label>Criteria</label></MDBCol>
                        <MDBCol md = "2"><label>For Now</label></MDBCol>
                        <MDBCol md = "2"><label>Method</label></MDBCol>
                        <br></br>
                      </MDBRow>
                      {this.state.shareholders1.map((shareholder1, idx1) => (
                        <div>
                           <MDBRow>
                            <MDBCol md = "3">
                              <input
                              type="text"
                              id="defaultFormCardNameEx"
                              className="form-control"
                              name="name"
                              onChange={this.updateInput}
                              value={this.state.option1}
                              />
                            </MDBCol>
                            <MDBCol md = "3">
                              <input
                              type="text"
                              id="defaultFormCardNameEx"
                              className="form-control"
                              name="name"
                              onChange={this.updateInput}
                              value={this.state.option2}
                              />
                            </MDBCol>
                            <MDBCol md = "3">
                              <select className="form-control">
                                <option value="1-5">1 to 5</option>
                                <option value="text">Text</option>
                              </select>
                            </MDBCol>
                            <MDBCol md = "3">
                              <Button type="primary" OnClick={this.handleRemoveShareholder1(idx1)}>Delete Criteria</Button>
                            </MDBCol>
                          </MDBRow>
                          <br></br>
                        </div>
                      ))}
                      <MDBRow>
                        <MDBCol md = "6">
                        </MDBCol>
                        <MDBCol md = "3">
                          <Button type="primary" onClick={this.handleAddShareholder1} >Add Criteria</Button>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  ))}
                  <MDBRow>
                    
                  <MDBCol md = "3">
                      <Button type="primary" onClick={this.handleAddShareholder} >Add New Topic</Button>
                    </MDBCol>
                  </MDBRow>  
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
          </MDBCollapse>
          {/* <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID1}>
          <h5 color="red">Evaluation Form is not included...</h5>
          <form>
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
                    value={this.state.topic1}
                  />
                </MDBCol>
                <MDBCol md ="3">
                  <Button type="primary" >Delete Topic</Button>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md = "4"><label>Criteria</label></MDBCol>
                <MDBCol md = "2"><label>For Now</label></MDBCol>
                <MDBCol md = "2"><label>Method</label></MDBCol>
                <br></br>
              </MDBRow>
              {this.state.shareholders.map((shareholder, idx) => (
              <MDBRow>
                <MDBCol md = "3">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.updateInput}
                  value={this.state.option1}
                  />
                </MDBCol>
                <MDBCol md = "3">
                  <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="name"
                  onChange={this.updateInput}
                  value={this.state.option2}
                  />
                </MDBCol>
                <MDBCol md = "3">
                  <select className="form-control">
                    <option value="1-5">1 to 5</option>
                    <option value="text">Text</option>
                  </select>
                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary">Delete Criteria</Button>
                </MDBCol>
                <br></br>
              </MDBRow>
              ))}
              <br></br>
              <MDBRow>
                <MDBCol md = "6">

                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary" onClick={this.handleAddShareholder} >Add Criteria</Button>
                </MDBCol>
                <MDBCol md = "3">
                  <Button type="primary" >Add Topic</Button>
                </MDBCol>
              </MDBRow>
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                  Submit
                <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCollapse> */}
        </MDBContainer>
      );
    }; 
  }; 
export default LecturerEva;