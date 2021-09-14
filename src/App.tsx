import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import SigninPage from './pages/SigninPage';



function App() {
  return (
    <div className="App">
      <Router>
      {/* <MainPage /> */}
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/signin" exact component={SigninPage} />
      </Switch>
      </Router>
    </div>
  );
  
}

export default App;
