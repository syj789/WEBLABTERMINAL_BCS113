import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import Matches from "./components/matches/Matches";
import NotFound from "./components/NotFound";
import NewMatch from "./components/matches/NewMatch";
import UpdateMatch from "./components/matches/UpdateMatch";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/matches/new" component={NewMatch} />
            <Route path="/matches/update/:id" component={UpdateMatch} />
            <Route path="/matches/:page?" component={Matches} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
