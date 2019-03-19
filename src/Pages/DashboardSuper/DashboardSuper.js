import React, { Component } from 'react';
import MenuBar from './Menu';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class DashboardSuper extends Component {
    render() {
      return (
          <MenuBar/>
    
      );
    }
  }
  
  export default DashboardSuper;