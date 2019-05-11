import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Webcam from "react-webcam";

import {
  CallApi
} from './services/CallApi';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.textChange = this.textChange.bind(this);

  }
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
    console.log("this.state", this.state);
    CallApi('users/login', 'POST', { email: this.state.email, password: this.state.password }).then((result) => {
      if (result.success) {
        this.setState({ message: "success" });
      } else {
        this.setState({ message: "" });

      }
      //this.setState();

      //console.log("result",result);
    })
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" onChange={this.textChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={this.textChange} />
              </Form.Group>
              <Button variant="primary" type="Button" onClick={this.handleLogin}>
                Login
  </Button>
              <Form.Text className="text-muted">
                {this.state.message &&
                  <span>{this.state.message}</span>
                }
              </Form.Text>
              <Link to="/signup">Sign Up</Link>
            </Form>


          </Row>
          <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
        </Container>


      </div>
    );
  }
}

export default App;
