import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBCollapse,  MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';
import Firebase from '../../../../../Components/Firebase/Firebase';
import { Button } from 'antd';

import Topic from './Topic'

class FormExist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         topics: [],
        };
    }
    
    addTopic = () => {
      const topics = this.state.topics.slice();
      const newTopics = topics.concat([{ 
        num: `t-${topics.length}`,
        name: "", 
        criterias: [] 
      }]);

      this.setState({ topics: newTopics});
    };

    removeTopic = idx => () => {
      this.setState({
        topics: this.state.topics.filter((t, tidx) => idx !== tidx)
      });
    };

    addCriteria = idx => () => {
      const topics = this.state.topics.slice();
      topics[idx].criterias = topics[idx].criterias.concat({
        num: `c-${idx}-${topics[idx].criterias.length}`,
        criteria: '', 
        forNow:'', 
        method: ''
      });
      this.setState({topics})
    }

    removeCriteria = topicIdx => critIdx => () => {
      const topics = this.state.topics.slice();
      const criterias = topics[topicIdx].criterias;
      topics[topicIdx].criterias = criterias.filter((t, idx) => {
        return idx !== critIdx;
      })
      this.setState({topics});
    }

    handleTopicNameChange = idx => (e) => {
      const topics = this.state.topics.slice();
      topics[idx].name = e.target.value;
      this.setState({topics});
    }

    handleCriteriaChange = topicIdx => critIdx => fieldName => e => {
      const topics = this.state.topics.slice();
      topics[topicIdx].criterias[critIdx][fieldName] = e.target.value;
      this.setState({topics});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const db = Firebase.firestore();

      this.state.topics.forEach(topic => {
        const r = db.collection('lecevaforms')
          .doc(this.props.evacode)
          .collection('topics')
          .doc(topic.num)
          .set(topic);
      });
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
          <h5 color="red">Evaluation Form is not included...</h5>
          <div>
            {this.state.topics.map((topic, idx) => (
              <Topic 
                key={'topic-'+idx} 
                topic={topic}
                topicNameOnChange={this.handleTopicNameChange(idx)}
                onDelete={this.removeTopic(idx)}
                toAddCriteria={this.addCriteria(idx)}
                toDeleteCriteria={this.removeCriteria(idx)}
                onCriteriaChange={this.handleCriteriaChange(idx)}
                criterias={this.state.topics[idx].criterias}
              ></Topic>
            ))}
            <MDBRow>
              <MDBCol md = "3">
                <Button type="primary" onClick={this.addTopic} >Add New Topic</Button>
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