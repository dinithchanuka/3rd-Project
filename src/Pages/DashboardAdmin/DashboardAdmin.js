import React, { Component } from 'react';
import MenuBar from './Menu';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class DashboardAdmin extends Component {
  
  render() {
    console.log(localStorage.getItem('userEmail'));
    return (
      <div>
        <MenuBar/>
      </div>   
    );
  }
}
  
  export default DashboardAdmin;