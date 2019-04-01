import React from 'react';

import firebase from '../Firebase/Firebase';

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
            this.setState({ items: [this.props.default, ...items] });
        });
        
    }

    render() {
        const list = this.state.items.map((item, i) => {
            if (i === 0) {
                return <option key={item.toString()} value="">{item}</option>
            }
            return <option key={item.toString()} value={item.toString()}>{item.toString()}</option>
        });

        return (
            <select
              className={this.props.className}
              name={this.props.name}
              defaultValue={0}
              placeholder={this.props.default}
              onChange={this.props.onChange}>
                {list}
            </select>

        );
        
    }
}
export default Dropdown;