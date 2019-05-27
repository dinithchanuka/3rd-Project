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
