import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import Dropdowns from '../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

import Topic from './Topic'

class FormExist extends React.Component {

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
    }
    
    handleAddShareholder = () => {
      this.setState({
        shareholders: this.state.shareholders.concat([{ name: "" }])
      });
    };
    handleRemoveShareholder = idx1 => () => {
      this.setState({
        shareholders: this.state.shareholders.filter((s1, sidx1) => idx1 !== sidx1)
      });
    };

    addEvaform = e => {
      e.preventDefault();
      const db = Firebase.firestore();
      console.log(db);
      
      const userRef = db.collection("evaforms").add({
        name: this.state.name,
        regnum: this.state.regnum,
        index: this.state.index,
        email: this.state.email,
        course: this.state.course,
        group: this.state.group
      })
      
      this.setState({
       name:"",
       regnum:"",
       index:"",
       email:"",
       course:"",
       group:"",
      });
    }

    render(){
        return(
          <form>
          <h5 color="red">Evaluation Form is not included...</h5>
          <div>
            {this.state.shareholders.map((shareholder, idx) => (
              <div>
                <Topic></Topic>
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
        )
    }
};
export default FormExist;