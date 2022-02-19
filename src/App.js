import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TaskPage from "./Pages/TaskPage";
import Login from "./components/login";
import Signup from "./components/signup";


function App() {
  
  return (
    <>
    <Router>
      <div>
        <div className="">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/taskpage" component={TaskPage} />
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
