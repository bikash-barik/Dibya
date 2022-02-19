import React, { Component } from "react";

export default class Login extends Component {
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="login-tab"
                  data-toggle="tab"
                  href="/"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="newuser-tab"
                  data-toggle="tab"
                  href="sign-up"
                  role="tab"
                  aria-controls="newuser"
                  aria-selected="false"
                >
                  New User
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <h3 className="register-heading">Login</h3>
                <div className="colomn register-form">
                  <div className="col-md-12 mt-5 profile_card">
                    <form className="form-inline">
                      <div className="form-group">
                        <i className="fa fa-envelope-o"></i>
                        <input
                          type="text"
                          className="form-control m-2"
                          placeholder="Email"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <i className="fa fa-lock"></i>
                        <input
                          type="password"
                          className="form-control m-2"
                          placeholder="Password *"
                          value=""
                        />
                      </div>
                      <div className="float-right">
                        <input
                          type="submit"
                          className="btn btn-primary m-2"
                          value="Register"
                        />
                      </div>
                    </form>
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
