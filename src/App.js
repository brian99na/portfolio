import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Whatif from './components/Projects/Whatif';
import HomePage from './components/Projects/HomePage';
import Madlibs from './components/Projects/Madlibs';
import { Routes, Route } from 'react-router';
import { useState } from 'react';

function App() {

  const [pageLeave, setPageLeave] = useState(false)

  return (
    <div className="App">
      <Header pageLeave={pageLeave} setPageLeave={setPageLeave}/>
      <Routes>
        <Route path="/" exact element={<Home pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/about" exact element={<About pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/resume" exact element={<Resume pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/contact" exact element={<Contact pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/projects/what-if" exact element={<Whatif pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/projects/home-age" exact element={<HomePage pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/projects/mad-libs" exact element={<Madlibs pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
      </Routes>
    </div>
  );
}

export default App;
