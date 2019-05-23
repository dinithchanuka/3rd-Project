import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import csv from 'csvtojson';
import Firebase from '../../../../Components/Firebase/Firebase';


export class GroupBulkRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            csvHeader: ['name','code'],
            csvData: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            csvData: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const csvString = this.state.csvData;
        csv({
            noheader: true,
            headers: this.state.csvHeader
        })
            .fromString(csvString)
            .then(objs => {
                const db = Firebase.firestore();

                objs.forEach(object => {
                    db.collection('groups').add(object);
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <MDBRow>
                <h4>Bulk Registration</h4>
            </MDBRow>
            <MDBRow>
                <MDBCol md="2">
                    <h6>Headers</h6>
                </MDBCol>
                <MDBCol md="8">
                    <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        name="headers"
                        value={"Course Name, Course Code"}
                        readOnly
                    />
                </MDBCol>
            </MDBRow>
            <br></br>
            <MDBRow>
                <MDBCol md="2">
                    <h6>Details</h6>
                </MDBCol>
                <MDBCol md="8">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={this.state.csvData}
                        onChange={this.handleChange}
                    />
                </MDBCol>
            </MDBRow>
            <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                    Upload
                <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
            </div>
        </form>
        );
    }
}