import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol,MDBBtn, MDBView, MDBContainer, MDBCard, MDBFormInline
  } from "mdbreact";
  import "./index.css";
import SignInUI from '../src/SignInUI';
import {
  CallApi
} from './services/CallApi';

class App extends Component {

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
    console.log("this.state", this.state);
    CallApi('users/login', 'POST', { email: this.state.email, password: this.state.password }).then((result) => {
      if (result.success) {
        this.setState({ message: "success" });
        this.props.history.push('/home');
      } else {
        this.setState({ message: "" });

      }
      //this.setState();

      //console.log("result",result);
    })
  };
  render() {
    //  const videoConstraints = {
    //   width: 1280,
    //   height: 720,
    //   facingMode: "user"
    // };
    const overlay = (
      <div id="sidenav-overlay"  style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")}    />
    );
    return (
      
     
      <div id="classicformpage">
        
          <div>
            <MDBNavbar dark expand="md" fixed="top">
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler  onClick={this.toggleCollapse("navbarCollapse")}/>
                <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                    
                    </MDBNavItem>
                    <MDBNavItem>
                     
                    </MDBNavItem>
                    <MDBNavItem>
                      
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        
  
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card" >
                      <SignInUI/>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
  
        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
