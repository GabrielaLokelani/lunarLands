
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EstateScreen from './screens/EstateSceen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { useState } from 'react';




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [user, setLoggedIn] = useState({})

  return (
    <div className="App">
       <ThemeProvider theme={darkTheme}>
       <CssBaseline />
      <BrowserRouter>
    <div>
      <header>
        <Link to='/'>Lunar Lands </Link>

        <Link to='/user/register'> Register </Link>
        <Link to='/user/login'> Login </Link>
      </header>
      <main>
        <Routes>
          <Route path='/user/login' element={<LoginScreen setLoggedIn={setLoggedIn}/>}/>
          <Route path='/user/register' element={<RegisterScreen/>} />
          <Route path='/estate/:slug' element={<EstateScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
