import React from "react";
import { MDBContainer , MDBCard, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import firebase from '../../../Components/Firebase/Firebase';


class Edit extends React.Component {
  constructor(props) {

    super(props);
    this.state={
      docid:'',
      id:'',
      name:this.props.name,
      email:this.props.email,
      shortform:this.props.shortform,
      subjects:[]
    };
    
  }
 
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({lecturers:state});
  }
  onSubmit = (e) => {
    e.preventDefault();
    
    const db = firebase.firestore();
    console.log(db);
    
    const ref=db.collection("lecturers").doc(this.props.docid);
    ref.set({
      
      name: this.state.name,
      shortform: this.state.shortform,
      id: this.state.id,
      email: this.state.email,
      subjects: this.state.subjects
    }); 
    
    db.collection("lecturers").doc(this.props.docid).update({

      name: this.state.name==""?this.props.name:this.state.name,
      shortform: this.state.shortform==""?this.props.shortform:this.state.shortform,
      //id: this.state.id==""?this.props.id:this.state.id,
      email: this.state.email==""?this.props.email:this.state.email,
      subjects: this.state.subjects==""?this.props.subjects:this.state.subjects
  })
  .then(function() {
      console.log("Document successfully updated!");
  });

  }
  
  render(){
    
    
    return (
      <MDBContainer>
        
        
        <form onSubmit={this.onSubmit}>
          <MDBRow>
            <h4>Edit Your Details</h4>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Name in Short Form
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="shortform"
                onChange={this.onChange}
                value={this.state.shortform}
                
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                ID
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="id"
                onChange={this.onChange}
                value={this.props.id}
                
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
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                
              />
            </MDBCol>
            <MDBCol md="3">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Subjects
            </label>
            <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="subjects"
                onChange={this.onChange}
                value={this.props.subjects}
                
              />
            {/* <Dropdown
              mode="multiple"
              style={{ width: '100%' }}
              placeholder={this.props.subjects}
              onChange={(val) => this.handleChange(val)}
              dbName="subjects"
              fieldName="code">
            >

            </Dropdown> */}
            </MDBCol>
            <MDBCol md="2">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >  
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
  }
}

export default Edit;