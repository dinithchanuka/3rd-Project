import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom'
import Firebase from '../Firebase/Firebase';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component { 
  constructor(props){
    super(props)
    const { classes } = props;
    this.classes = classes;
  }
  state = {
    redirect:false
  }
  setRedirect = () => {
    console.log("set")
    this.logout();
   
    this.setState({
      redirect:true
    })
  }
  logout = () =>{
    
    Firebase.auth().signOut().then(function(){
      console.log("logout from current user");
    }).catch(function(error){

    })
  }
  renderRedirect = () => {
    if (this.state.redirect){
      return < Redirect to='./' />
    }
  }
  render(){
    return (
      <div className={this.classes.root}>
        {this.renderRedirect()}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={this.classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={this.classes.grow}>
              Evaluation System
            </Typography>
            <Button color="inherit" onClick={this.setRedirect}>Log Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);