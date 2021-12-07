import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" exact element={<About />}/>
        <Route path="/resume" exact element={<Resume />}/>
        <Route path="/contact" exact element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
