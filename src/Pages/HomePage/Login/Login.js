import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Firebase from '../../../Components/Firebase/Firebase'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         open:false,
         email:"",
         password:"",
         type:"",
         userEmail:"",
         userPassword:"",
         lec:[],
        };
        this.updateInput = this.updateInput.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
      }

    updateInput = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleLogin = () => {
      const lec = [];
      var Ref = Firebase.firestore().collection('users')
      var query = Ref.where('email', '==',this.state.userEmail).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
    
        snapshot.forEach((doc) =>{
          const {email,password,type} = doc.data();
          lec.push({
            key:doc.id,
            email,
            password,
            type
          });
        });

        this.setState({
          email: lec[0].email,
          password: lec[0].password,
          type: lec[0].type
        });

        console.log(this.state);
        const next =  this.handleLoggingType();
        console.log(next);
        window.location.href = next;
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    }; 
    
    handleLoggingType = () => {
      if(this.state.password==this.state.userPassword){
        if(this.state.type=="Lecturer"){
          return '/lecturerdashboard'; 
        }else if(this.state.type=="Admin"){
          return '/admindashboard';
        }else if(this.state.type=="Superadmin"){
          return '/superdashboard';
        }
      } else {
        return '/notfound';
      }
    }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Go To System
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up Here . . .</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              fullWidth
              name = "userEmail"
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              onChange={this.updateInput}
              value={this.state.userEmail}
            />

            <TextField
              name = "userPassword"
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.updateInput}
              value={this.state.userPassword}
              
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default LoginForm;