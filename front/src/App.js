import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/auth";

function App() {
  return (
      <Router>
          <Route path="/" component={Header}/>
          <Route path="/login" component={Login}/>
      </Router>

  );
}

export default App;
