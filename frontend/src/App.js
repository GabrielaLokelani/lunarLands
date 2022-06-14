
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import EstateScreen from './screens/EstateSceen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div>
      <header>
        <Link to='/'>Lunar Lands</Link>

        <Link to='/users/register'>Register</Link>
      </header>
      <main>
        <Routes>
          <Route path='/users/register' element={<RegisterScreen/>} />
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
