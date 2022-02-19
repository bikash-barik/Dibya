import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>“It’s not whether you get knocked down, it’s whether you get up.”</p>
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item  active">
                <a
                  className="nav-link"
                  id="newuser-tab"
                  data-toggle="tab"
                  href="/"
                  role="tab"
                  aria-controls="newuser"
                  aria-selected="true"
                >
                      Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  active"
                  id="login-tab"
                  data-toggle="tab"
                  href="sign-up"
                  role="tab"
                  aria-controls="login"
                  aria-selected="false"
                  
                >
                    New User
              
                </a>
              </li>
             
            </ul>
            <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active ml-4"
              id="newuser"
              role="tabpanel"
              aria-labelledby="newuser-tab"
            >
              <h3 className="register-heading">New User</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      maxlength="10"
                      minlength="10"
                      className="form-control"
                      placeholder="Phone *"
                      value=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value=""
                    />
                  </div>
                  <div className="float-right">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Register"
                    />
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
