import React, { Component } from "react";
import "../Style.css";

export default class DemoLogin extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div Class="flex">
            <div class="d-flex justify-content-center h-100">
              <div class="card">
                <div class="card-header">
                  <h3>Sign In</h3>
                  <div class="d-flex justify-content-end social_icon">
                    <span>
                      <i class="fab fa-facebook-square"></i>
                    </span>
                    <span>
                      <i class="fab fa-google-plus-square"></i>
                    </span>
                    <span>
                      <i class="fab fa-twitter-square"></i>
                    </span>
                  </div>
                </div>
                <div class="card-body">
                  <form action="LoginCtrl" method="post">
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="username"
                        name="userName"
                      />
                    </div>
                    <div class="input-group form-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="password"
                        name="password"
                      />
                    </div>
                    <div class="row align-items-center remember">
                      <input type="checkbox" />
                      Remember Me
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        value="Login"
                        class="btn float-right login_btn btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
                <div class="card-footer">
                  <div class="d-flex justify-content-center links">
                    Don't have an account?<a href="Signup.jsp">Sign Up</a>
                  </div>
                  <div class="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="card d-flex justify-content-center"
            style={{width: "18rem", height:"10rem" ,marginTop:"10rem"}}
          >
            <div class="card-body">
              <h5 class="card-title" style={{olor: "white", textAlign: "center"}}>
                Servlet Page
              </h5>
              <a
                href="HelloCtrl"
                class="btn btn-warning"
                style={{marginTop: "2rem", marginLeft:"3rem", alignTtems: "center"}}
              >
                Go New Page
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
