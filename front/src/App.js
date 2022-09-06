import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/auth_form";
import Register from "./components/register_form";

function App() {
  return (
      <Router>
          <Route path="/" component={Header}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
      </Router>

  );
}

export default App;
