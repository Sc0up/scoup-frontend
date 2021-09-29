import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

import './App.css';
import MainPage from './pages/MainPage';
import { Theme } from './style/theme';
import GlobalStyle from './style/globalStyle';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className="App">
          <MainPage />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
