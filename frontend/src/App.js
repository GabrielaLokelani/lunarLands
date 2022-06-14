
import './App.css';
// import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import EstateScreen from './screens/EstateSceen';
import HomeScreen from './screens/HomeScreen';



function App() {
  return (
    <div className="App">
      <h1>Lunar Lands, lets go to the moon!!!</h1>
      <BrowserRouter>
    <div>
      <header>
        <Link to='/'>Lunar Lands</Link>
      </header>
      <main>
        <Routes>
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
