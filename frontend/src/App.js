
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import EstateScreen from './screens/EstateSceen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div>
      <header>
        <Link to='/'>Lunar Lands </Link>

        <Link to='/user/register'> Register </Link>
        <Link to='/user/login'> Login </Link>
      </header>
      <main>
        <Routes>
          <Route path='/user/login' element={<LoginScreen/>} />
          <Route path='/user/register' element={<RegisterScreen/>} />
          <Route path='/estate/:slug' element={<EstateScreen/>} />
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
