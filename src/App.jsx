import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Game } from './pages'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'
import Test from './pages/test';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0061c2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#5c6bc0',
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/game/:id" element={<Game />}></Route>
          <Route exact path="/game" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App