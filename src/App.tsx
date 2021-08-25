import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainPage from './pages/MainPage';
import { Theme } from './style/theme';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <MainPage />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
