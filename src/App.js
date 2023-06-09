import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/about' element={<AboutMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;