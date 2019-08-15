import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../../Components/Firebase/Firebase'
import Dropdowns from '../../../../../Components/Dropdown/Dropdown';
import { Button } from 'antd';

class ViewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         topics: [],
        };
    }

    componentDidMount() {
      this.getDetails();
      
    }
    
    getDetails = () => {
      console.log('#getDetails()')
      const studentIdList = [];
      var code = this.props.selected;
      console.log("\tcode =>", code);
      
      if(code){
        const topics = [];
        const studentCollection = Firebase.firestore()
          .collection('lecevarecods')
          .doc(code)
          .collection('students')

        studentCollection.get().then(collection => {
          collection.forEach(doc => {
            studentCollection.doc(doc.id).collection('topics')
              .get()
              .then(collection => {
                collection.forEach(doc => topics.push({ id: doc.id, data: doc.data() }));
                console.log(topics);
                return topics;
              })
              .then(topics => this.setState({ topics }));
          }); 
        });
        console.log("aaaaa",studentCollection);
      }
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
          <h5 color="red">Student Feedback</h5>
          <div>
            { this.state.topics.map((topic, idx) => <pre key={topic.id}>
              <label>Topic : </label>{topic.data.name}<br></br>
              Criteria : {topic.data.c01.name}<br></br>
              Value : {topic.data.c01.value}<br></br>
              Criteria : {topic.data.c02.name}<br></br>
              Value : {topic.data.c02.value}<br></br>
              <hr></hr>
              </pre>)}
              

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
export default ViewForm;