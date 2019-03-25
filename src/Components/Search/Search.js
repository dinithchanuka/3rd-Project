import React, { Component } from 'react';

import firebase from '../Firebase/Firebase';

class Search extends React.Component{
    constructor(props){
        super(props)

        const ref = firebase.firestore().collection(this.props.dbName);
        ref.get().then(getData=>{
            return db.collection(dbName)
              .where(fieldName, op, value)
              .get()
              .then(querySnapshot => {
                let users = [];
                querySnapshot.forEach(doc => {
                  users.push(_.pick(doc.data(), fields));
                });
                return users;
            });
        });
            
    }
    render() {
        const users = this.state.items.map((item, i) => {
            return <option key={item.toString()} value={item.toString()}>{item.toString()}</option>
        });

        return (
            <Select
              mode={this.props.mode}
              style={this.props.style}
              placeholder={this.props.default}
              onChange={this.props.onChange}>
                {list}
            </Select>
        );
        
    }
       
}

