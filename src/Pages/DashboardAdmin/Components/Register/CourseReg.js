import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../Components/Firebase/Firebase';
import {CourseBulkRegistrationForm} from "./CourseRegBulk";
import { message, Button } from 'antd';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     code:"",
    };
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addCourse = () => {
    const db = Firebase.firestore();
    console.log(db);
    
    const userRef = db.collection("courses").add({
      name: this.state.name,
      code: this.state.code,
    }); 
    this.setState({
      name:"",
      code:"",
    });
  }
  dbOperation = (e) => {
    e.preventDefault();
    const db = Firebase.firestore();
    const courseRef = db.collection('courses');

    if(
      this.state.name.length == 0 ||
      this.state.code.length == 0
    ){
      message
      .loading('Action in progress...',1)
      .then(()=> message.info('There are some empty fields which are con not be Empty'))

    }else(

      courseRef.where('code','==',this.state.code).get()
      .then((codeSnap) => {
        if(codeSnap.docs.length == 0) {
          this.addCourse();
          message
          .loading('Action in progress')
          .then(()=> message.success('Course added Successfully'))
        }else{
          message
          .loading('Action in progress...',1)
          .then(()=> message.info('The code already exists'))

          throw new Error ('code exists');
        }
      }
      )
      .catch((error)=> {
        console.error(error);
      })
    )
  } 
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.dbOperation}>
          <MDBRow>
            <h4>Course Register</h4>
          </MDBRow>
          <br></br>
          <MDBRow>
            <MDBCol md="7">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Course Name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="name"
                onChange={this.updateInput}
                value={this.state.name}
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Course Code
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
          </MDBRow>
          <br></br>
          
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
        <hr></hr>
        <CourseBulkRegistrationForm/>
      </MDBContainer>
    );
  }
}

export default Course;


// import React from "react";

// class Course extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       shareholders: [{ name: "" }]
//     };
//   }

//   // ...

//   handleShareholderNameChange = idx => evt => {
//     const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
//       if (idx !== sidx) return shareholder;
//       return { ...shareholder, name: evt.target.value };
//     });

//     this.setState({ shareholders: newShareholders });
//   };

//   handleSubmit = evt => {
//     const { name, shareholders } = this.state;
//     alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
//   };

//   handleAddShareholder = () => {
//     this.setState({
//       shareholders: this.state.shareholders.concat([{ name: "" }])
//     });
//   };

//   handleRemoveShareholder = idx => () => {
//     this.setState({
//       shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* ... */}
//         <h4>Shareholders</h4>

//         {this.state.shareholders.map((shareholder, idx) => (
//           <div className="shareholder">
//           <br></br>
//             <input
//               type="text"
//               placeholder={`Shareholder #${idx + 1} name`}
//               value={shareholder.name}
//               onChange={this.handleShareholderNameChange(idx)}
//             />
//             <br></br>
//             <button
//               type="button"
//               onClick={this.handleRemoveShareholder(idx)}
//               className="small"
//             >
//               -
//             </button>
//           </div>
//         ))}
//         <br></br>
//         <button
//           type="button"
//           onClick={this.handleAddShareholder}
//           className="small"
//         >
//           Add Shareholder
//         </button>
//         <button>Incorporate</button>
//       </form>
//     );
//   }
// }
//  export default Course;