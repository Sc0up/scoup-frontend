import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './pages/MainPage';
import { Theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
