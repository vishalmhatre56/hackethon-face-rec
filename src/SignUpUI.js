import React, { Component } from 'react';
import Webcam from "react-webcam";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBIcon,
  MDBBtn, MDBCardBody, MDBInput,MDBAlert
  } from "mdbreact";
  import "./index.css";

import {
    CallApi,CallApi2
} from './services/CallApi';

class SignUpUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            collapseID: "",
            imageData:"",
            error:false,
            success:false,
            isCaptured : "false",
            capturedImg :""
 
        };
        // this.handleLogin = this.handleLogin.bind(this);
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
        this.setState({imageData:imageSrc})
        console.log(imageSrc);
       
        this.setState({isCaptured:"true"});
        this.setState({capturedImg :imageSrc})
    };

    resetImage = () =>
    {
        this.setState({isCaptured:"false"});
        this.setState({capturedImg :""})
    }
    handleSignUp() {
        console.log("this.state", this.state);
        CallApi('users/register', 'POST', { first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, password: this.state.password }).then((result) => {
            if (result.error) {
                this.setState({ error: "success" });
            } else {
                this.setState({ message: "" });

            }
          
        })
    };
    onSubmitData=()=>{
         
        let first_name=document.getElementById("first_name").value
        let last_name=document.getElementById("last_name").value
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value
         
        CallApi('users/register', 'POST', { first_name:first_name, last_name: last_name, email: email, password: password,imageData:this.state.imageData }).then((result) => {
            if (result.error) {
                this.setState({ error:true,message: result.message });
            } else {
                this.setState({ success:true,error:false,message:result.message });
                this.props.togalePage("signIn")
            }
            //this.setState();

            //console.log("result",result);
        })
        
    }
    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };
        return (
            <MDBCardBody className="z-depth-2 white-text">
                <h3 className="text-center">
                    <MDBIcon icon="user" /> Register:
                      </h3>
                <hr className="hr-light" />
                {this.state.error?<MDBAlert color="danger" >
                {this.state.message}
      </MDBAlert>:""}  
      {this.state.success?<MDBAlert color="success" >
      {this.state.message}
      </MDBAlert>:""} 
                <MDBInput id = "first_name" label="First name" icon="user" />
                <MDBInput id = "last_name" label="Last name" icon="user" />
                <MDBInput id = "email" label="Your email" icon="envelope" />
                <MDBInput id = "password" label="Your password" icon="lock" type="password" />
                <center>
                    {
                        this.state.isCaptured ==="false" ?
                    
                     <Webcam
                    audio={false}
                    height={250}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={250}
                    videoConstraints={videoConstraints} 
                />:<img src={this.state.capturedImg}/> }
                <img src=""/>
                    <a size="lg" floating  onClick={this.capture}>
                        <MDBIcon icon="camera" size="2x" /></a>&nbsp;&nbsp; &nbsp;&nbsp;
                    <a size="lg" floating onClick={this.resetImage}>
                        <MDBIcon icon="redo" size="2x" /></a>
                </center>
                <div className="text-center mt-4 black-text">
                <button onClick={this.onSubmitData} type="button" class="btn btn-indigo btn-block" style={{backgroundColor: "#3f51b5 !important"}}>Sign Up</button>
                    <a onClick={()=>this.props.togalePage("signIn")} style={{float:"right", textDecoration: "underline",color:"#82b1ff"}}>Sign In</a>
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

export default SignUpUI;
