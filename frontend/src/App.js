
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
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
    <div className="d-flex flex-column site-container">
      <header>
      <Navbar bg='dark' variant='dark'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Lunar Lands</Navbar.Brand>
            </LinkContainer>
          <Nav className="me-auto">
          <Nav.Link href='/user/register'> Register </Nav.Link>
          <Nav.Link href='/user/login'> Login </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container className='mt-3'>
        <Routes>
          <Route path='/user/login' element={<LoginScreen setLoggedIn={setLoggedIn}/>}/>
          <Route path='/user/register' element={<RegisterScreen/>} />
          <Route path='/estate/:_id' element={<EstateScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved Lunar Lands 2032</div>
      </footer>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
