import React, { Component } from 'react';
import Webcam from "react-webcam";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBIcon,
  MDBBtn, MDBCardBody
  } from "mdbreact";
  import "./index.css";

import {
  CallApi
} from './services/CallApi';

class SignInUI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      collapseID: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.textChange = this.textChange.bind(this);

  }

  toggleCollapse = collapseID => () =>
this.setState(prevState => ({
collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

  setRef = webcam => {
    this.webcam = webcam;
  };
  textChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  }
  onUserMedia(data) {
    console.log(data);

  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    
  };
  handleLogin() {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    console.log("this.state", this.state);
    CallApi('users/login', 'POST', { email: "abc@gmail.com", password: "hello",imageData:imageSrc }).then((result) => {
      if (result.success) {
        this.setState({ message: "success" });
      } else {
        this.setState({ message: "" });

      }
    })
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
                  <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Login:
                      </h3>
                      <hr className="hr-light" />
                     
                     <center> <Webcam
          audio={false}
          height={250}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={250}
          videoConstraints={videoConstraints}
        />
        {/* <button onClick={this.capture}>Capture photo</button> */}
       
        </center>
                      <div className="text-center mt-4 black-text">
                      <button onClick={this.handleLogin}  type="button" class="btn btn-indigo btn-block" style={{backgroundColor: "#3f51b5 !important"}}>Sign In</button>
                      <a onClick={()=>this.props.togalePage("signUp")} style={{float:"right", textDecoration: "underline",color:"#82b1ff"}}>Sign Up</a>
                     <br></br>

                        
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="twitter" className="white-text" />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="linkedin-in" className="white-text" />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="instagram" className="white-text" />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                 
    );
  }
}

export default SignInUI;
