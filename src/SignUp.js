import React, { Component } from 'react';
import { Container,Row, Form, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom'

import {
  CallApi
} from './services/CallApi';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      message:''
      };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.textChange = this.textChange.bind(this);

  }

  textChange(event) {
    if(event.target.name==="first_name"){
  this.setState({ first_name : event.target.value });
}
   if(event.target.name==="last_name"){
  this.setState({ last_name : event.target.value });
}
    if(event.target.name==="email"){
  this.setState({ email : event.target.value });
}
   if(event.target.name==="password"){
  this.setState({ password : event.target.value });
}
}

handleSignUp() {
  console.log("this.state",this.state);
    CallApi('users/register', 'POST', {first_name:this.state.first_name,last_name:this.state.last_name, email:this.state.email,password:this.state.password}).then((result) => {
     if(result.success){
      this.setState({message:"success"});
     }else{
      this.setState({message:""});

     }
     //this.setState();
       
      //console.log("result",result);
    })
  };
  render() {
  return (
    <div>
    <Container>
  <Row className="justify-content-md-center">

      <Form>
  <Form.Group controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" name="first_name" placeholder="First Name" onChange={this.textChange} />
     </Form.Group>
     <Form.Group controlId="formBasicLastName">
     <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" name="last_name" placeholder="Last Name" onChange={this.textChange} />
     </Form.Group>
     <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.textChange} />
     </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" onChange={this.textChange} />
  </Form.Group>
  <Button variant="primary" type="Button" onClick={this.handleSignUp}>
    SignUp
  </Button>
<Form.Text className="text-muted">
{this.state.message &&
<span>{this.state.message}</span>
}
</Form.Text>
<Link to="/">Login</Link>
</Form>

</Row>
</Container>


    </div>
  );
}
}

export default SignUp;
