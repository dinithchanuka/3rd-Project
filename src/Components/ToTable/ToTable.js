import React, { Component } from 'react';
import _ from 'lodash';

import firebase from '../Firebase/Firebase';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

class Search extends React.Component{
    constructor(props){
        super(props)
       
        const ref = firebase.firestore().collection(this.props.dbName);
        ref.get().then(getData=>{
            return db.collection(dbName)
              .get()
              .then(querySnapshot => {
                let datas = [];
                querySnapshot.forEach(doc => {
                  data.push(_.pick(doc.data(), this.props.fields));
                });
                return datas;
            });
        });
    }
        render(){
            const list = this.state.items.map((data, i) => {
                if (i === 0) {
                    return createData(i, {dta}, 3)
                }
                return <option key={item.toString()} value={item.toString()}>{item.toString()}</option>
            });
        }


    
}

