import React from 'react';

import firebase from '../Firebase/Firebase';
import { Select } from 'antd';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };

        const ref = firebase.firestore().collection(this.props.dbName);
        ref.get().then(itemsList => {
            let items = [];
            itemsList.forEach(doc => {
                items.push((doc.data())

                [this.props.fieldName]);
            });
            this.setState({ items });
        });
        
    }

    render() {
        const list = this.state.items.map((item, i) => {
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
export default Dropdown;