import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
import EditForm from './Edit';
import firebase from '../../../../Components/Firebase/Firebase';
import Popover from 'react-simple-popover';
// import { getEmail } from '../../HomePage/Login/Login';

class View extends React.Component {
    constructor(props) {
        super(props);
        //console.log(firebase.auth().currentUser.email);
        var user = firebase.auth().currentUser;
        this.ref = firebase.firestore().collection('lecturers').where("email", "==", "kasun@gmail.com");
        this.unsubscribe = null;
        this.state = {
            open: false,
            lecturers: [],
            //subjects:[]
        };
        
    }

    onCollectionUpdate = (querySnapshot) => {
        // getEmail();
        
        const lecturers = [];
        //const subjects = [];
        querySnapshot.forEach((doc) => {
            const {  id, name, email, shortform, subjects } = doc.data();
            lecturers.push({
                key: doc.id,
                doc, // DocumentSnapshot
                id,
                name,
                email,
                shortform,
                subjects
            });
            // subjects.push({
            //     subjects
            // })
           
        });
        
        this.setState({
            lecturers,
            //subjects
        });
        
        
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    handleClick(e) {
        this.setState({ open: !this.state.open });
    }

    handleClose(e) {
        this.setState({
             open: false,
             lecturers:[]
             });
    }

    render() {

        return (

            <MDBContainer>
                
                {this.state.lecturers.map(lecturers =>
                
                    <MDBCard>

                        <div class="text-left">
                            

                                <MDBRow>
                                    <MDBCol md="1"></MDBCol>
                                    <MDBCol md="4">
                                        <p class="mt-5">Id</p>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <p class="mt-5"><large className="text-muted">{lecturers.id}</large></p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="1"></MDBCol>
                                    <MDBCol md="4">
                                        <p class="mt-3">Name</p>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <p class="mt-3"><large className="text-muted">{lecturers.name}</large></p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="1"></MDBCol>
                                    <MDBCol md="4">
                                        <p class="mt-3">Email</p>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <p class="mt-3"><large className="text-muted">{lecturers.email}</large></p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="1"></MDBCol>
                                    <MDBCol md="4">
                                        <p class="mt-3">ShortForm</p>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <p class="mt-3"><large className="text-muted">{lecturers.shortform}</large></p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="1"></MDBCol>
                                    <MDBCol md="4">
                                        <p class="mt-3">Subjects</p>
                                    </MDBCol>
                                    <MDBCol md="5">
                                        <p class="mt-3"><large className="text-muted">{lecturers.subjects}
                                        {/* {this.state.subjects.map((item,i) =>{
                                            console.log(this.state.subjects);
                                            return  item.toString()
                                            })} */}
                                            </large></p>
                                    </MDBCol>
                                </MDBRow>

                            </div>
                        

                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="2">
                                <div class="p-5">

                                    <div>
                                        <a
                                            href="#"
                                            className="btn btn-outline-purple"
                                            ref="target"
                                            onClick={this.handleClick.bind(this)}>Edit</a>
                                        <Popover
                                            placement='top'
                                            container={this}
                                            target={this.refs.target}
                                            show={this.state.open}
                                            onHide={this.handleClose.bind(this)} >
                                            <MDBCard style={{ width: "40rem" }}>
                                            <EditForm
                                                    docid={lecturers.doc.id}
                                                    name={lecturers.name}
                                                    id={lecturers.id}
                                                    email={lecturers.email}
                                                    shortform={lecturers.shortform}
                                                    subjects={lecturers.subjects} />
                                                    </MDBCard>
                                        </Popover>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </MDBCard>

                )}
            </MDBContainer>
        );
    }
}
export default View;