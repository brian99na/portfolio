import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProjectTemplate from './components/Projects/ProjectTemplate';
import { Routes, Route } from 'react-router';
import { useState } from 'react';
import btcAnim from './images/coinflip_img.png'


function App() {

  const [pageLeave, setPageLeave] = useState(false)
  const [contactHeader, setContactHeader] = useState(false)
  const [projectHeader, setProjectHeader] = useState(false)


  const templateArr = [
      {
        name: 'Create',
        color: 'color0',
        art: btcAnim,
        title1: 'Create',
        title2: 'Media app for artists and creators',
        title3: 'React, SASS, HTML, JavaScript, Django, Python',
        link1: 'https://brian99na.github.io/Create/',
        link2: 'https://github.com/brian99na/Create',
        secTitle1: 'My thought process.',
        secPara: `The general perception of cryptocurrencies is that its a way of getting rich quick.
        This often overshadows the utility of these coins.
        This website guides users by showing them the aspect they are most familiar with in crypto, the sweet gains.
        It then pivots to explain one of Bitcoin's use cases: being a hedge against inflation.
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`
      },
      {
        name: 'what-if',
        color: 'color1',
        art: btcAnim,
        title1: 'What If?',
        title2: 'Cryptocurrency calculator',
        title3: 'React, CSS, HTML, JavaScript',
        link1: 'https://brian99na.github.io/what-if/',
        link2: 'https://github.com/brian99na/what-if',
        secTitle1: 'My thought process.',
        secPara: `The general perception of cryptocurrencies is that its a way of getting rich quick.
        This often overshadows the utility of these coins.
        This website guides users by showing them the aspect they are most familiar with in crypto, the sweet gains.
        It then pivots to explain one of Bitcoin's use cases: being a hedge against inflation.
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`
      },
      {
        name: 'home-page',
        color: 'color2',
        title1: 'Home.',
        title2: 'Browser Homepage',
        title3: 'React, CSS, HTML, JavaScript',
        link1: 'https://brian99na.github.io/HomePage/',
        link2: 'https://github.com/brian99na/HomePage',
        secTitle1: 'My thought process.',
        secPara: `The general perception of cryptocurrencies is that its a way of getting rich quick.
        This often overshadows the utility of these coins.
        This website guides users by showing them the aspect they are most familiar with in crypto, the sweet gains.
        It then pivots to explain one of Bitcoin's use cases: being a hedge against inflation.
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`
      },
      {
        name: 'mad-libs',
        color: 'color3',
        title1: 'Madlibs!',
        title2: 'Word Game',
        title3: 'React, CSS, HTML, JavaScript, MongoDB/Mongoose, Express',
        link1: 'https://mongomisfits.github.io/mad-libs-frontend/#/',
        link2: 'https://github.com/MongoMisfits',
        secTitle1: 'My thought process.',
        secPara: `The general perception of cryptocurrencies is that its a way of getting rich quick.
        This often overshadows the utility of these coins.
        This website guides users by showing them the aspect they are most familiar with in crypto, the sweet gains.
        It then pivots to explain one of Bitcoin's use cases: being a hedge against inflation.
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`
      }
  ]

  const projectsJsx = templateArr.map((project) => {
    return(
      <Route path={`/projects/${project.name}`} exact element={<ProjectTemplate pageLeave={pageLeave} setPageLeave={setPageLeave}
        title1={project.title1} title2={project.title2} title3={project.title3} link1={project.link1} link2={project.link2}
        secTitle1={project.secTitle1} secPara={project.secPara} color={project.color} art={project.art}/>}/>
    )
  })

  return (
    <div className="App">
      <Header pageLeave={pageLeave} setPageLeave={setPageLeave} contactHeader={contactHeader} setContactHeader={setContactHeader} projectHeader={projectHeader} setProjectHeader={setProjectHeader}/>
      <Routes>
        <Route path="/" exact element={<Home pageLeave={pageLeave} setPageLeave={setPageLeave} contactHeader={contactHeader} setContactHeader={setContactHeader} projectHeader={projectHeader} setProjectHeader={setProjectHeader}/>}/>
        <Route path="/about" exact element={<About pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/resume" exact element={<Resume pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/contact" exact element={<Contact pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        {projectsJsx}
      </Routes>
    </div>
  );
}

export default App;
