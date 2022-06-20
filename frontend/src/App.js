
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
import { useContext, useState } from 'react';
import { Store } from './Store';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [user, setLoggedIn] = useState({})
  const { state } = useContext(Store);
  const { cart } = state;

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
          <Nav.Link href='/user/logout'> Logout </Nav.Link>
          <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  {cart.cartItems.length > 0 && (
                  <IconButton aria-label="cart">
                  <Badge badgeContent={cart.cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                  </IconButton>
                  )}
                </Link>
              </Nav>
          </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container className='mt-3'>
        <Routes>
          <Route path='/user/logout' />
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
