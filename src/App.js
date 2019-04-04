import React, { Component } from 'react';
import './App.css';

import{BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage';
import AdminDashboard from './Pages/DashboardAdmin/DashboardAdmin';
import LecturerDashboard from './Pages/DashboardLecturer/DashboardLecturer';
import SuperDashboard from './Pages/DashboardSuper/DashboardSuper';
import Error from './Pages/Error/PageNotFound';
import Navbar from './Components/Navbar/Navbar';
//import view from './Pages/DashboardLecturer/Profile/View';
import AdminMenu from './Pages/DashboardAdmin/Menu';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path ="/" component={HomePage}/>
        
        <Route exact path ="/admindashboard" component={AdminDashboard}/>
        <Route exact path ="/superdashboard" component={SuperDashboard}/>
        <Route exact path ="/lecturerdashboard" component={LecturerDashboard}/>

        <Route exact path = "/adminmenu" component={AdminMenu}/>        
        
        <Route component={Error} />

        </Switch>
      </div>
      </Router>
  
    );
  }
}

export default App;
