import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Theme } from './style/theme';
import GlobalStyle from './style/globalStyle';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Pages from './pages';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <div className="App">
            <Router>
            {/* <MainPage /> */}
            <Switch>
              <Route path="/" exact component={Pages.Main} />
              <Route path="/signin" component={Pages.Signin} />
              <Route path="/signup" component={Pages.Signup} />
            </Switch>
            </Router>
          </div>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App;
