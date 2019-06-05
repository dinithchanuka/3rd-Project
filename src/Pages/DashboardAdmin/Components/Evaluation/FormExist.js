import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button, message } from 'antd';

class FormExist extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        details:[],
        code:"",
        lecid:"",
        by:"",
        responsible:"",
        year:""
      };
    }

    viewDetails = (value) => {
      const details = [];
      var formRef = Firebase.firestore().collection('evaforms').doc(this.props.code).get()
        .then(snapshot => {
          if(snapshot.empty){
            console.log('No matching document')

            return;
          }

          snapshot.forEach((doc) => {
            const {code,name} = doc.data();
            details.push({
              key:doc.id,
              code,
              name
            });
          });

          this.setState(prevState => ({
            docid:details[0].key,
            code:details[0].code,
            name:details[0].name
          }));
          console.log("Test 2")
        })
        .catch(err => {
          console.log('Error getting documents',err);
        });
    }
     
    render(){
        return(
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
        )
    }
};
export default FormExist;
