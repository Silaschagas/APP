import React from 'react';
import './App.css';
import './style.css';
import Header from './Header/Header';
import Routes from './routes';
import * as firebase from 'firebase';


let auth;
let config;

class App extends React.Component {
  constructor(){
    super();
    auth = undefined;
    config = undefined;
    this.autenticate = this.autenticate.bind(this);

    this.config = {
      apiKey: "AIzaSyBBqWfcON7yN2Msxvt9WC-ENEi3IsG8fJs",
      authDomain: "psycho-tech-2be0f.firebaseapp.com",
      databaseURL: "https://psycho-tech-2be0f.firebaseio.com",
      projectId: "psycho-tech-2be0f",
      storageBucket: "psycho-tech-2be0f.appspot.com",
      messagingSenderId: "803979196171",
      appId: "1:803979196171:web:3ef17c195e5ba3f565940e",
      measurementId: "G-TPRE75GL85"
    };

    this.state ={
      user: undefined
    }
  }

  
  componentDidMount(){
    firebase.initializeApp(this.config);
    this.auth = firebase.auth();

    this.auth.onAuthStateChanged(function(user){
      if(user){
        this.setState({
          user:user
        });
        console.log(user);
        localStorage.setItem('firebase_auth',this.state.user)
      }else{
        this.setState({
          user:undefined
        });
        localStorage.removeItem('firebase_auth');
      }
    });
  }

  autenticate(e){
    e.preventeDefault();
    console.log('autenticate');

    this.auth.signInWithEmailAndPassword(this.refs.user.value,this.refs.password.value).then(singedUser => {
      this.setState({
        user:singedUser
      })
    }).catch(function(error){
      var erro = error.code;
      var errorMessage = error.message;
      console.log(erro + ' ' +errorMessage )
    })

  }

  render(){
    return(
      <div className="App">
        <Header />
        <Routes />
      </div>
    )
  }
}


export default App;
