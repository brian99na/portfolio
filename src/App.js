import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import ProjectTemplate from './components/Projects/ProjectTemplate';
import { Routes, Route } from 'react-router';
import { useState } from 'react';
import btcAnim from './images/coinflip_img.png'
import whatif1 from './images/whatifArt1_00000.png'
import whatif2 from './images/whatifArt2.png'
import createArt from './images/android-chrome-512x512-removebg-preview.png'
import create1 from './images/createArt1_00000.png'
import create2 from './images/createArt3_00000.png'
import madlibArt from './images/madlibs_00000.png'
import madlib1 from './images/mongoArt1_00000.png'
import madlib2 from './images/mongoArt2_00000.png'
import homepageArt from './images/goodmorning_00000.png'
import home1 from './images/homeArt1_00000.png'
import home2 from './images/homeArt2_00000.png'


function App() {

  const [pageLeave, setPageLeave] = useState(false)
  const [contactHeader, setContactHeader] = useState(false)
  const [projectHeader, setProjectHeader] = useState(false)


  const templateArr = [
      {
        name: 'Create',
        color: 'color0',
        art: createArt,
        title1: 'Create',
        title2: 'A social media website for artists and creators',
        title3: 'React, SASS, HTML, JavaScript, Django, Python',
        link1: 'https://brian99na.github.io/Create/',
        link2: 'https://github.com/brian99na/Create',
        secTitle1: 'My thought process.',
        secPara: `My background is in filmmaking/editing/motion-graphics and I wanted a place to store snippets 
        of work that I could easily show others. I found that a standard portfolio was too restricting
        in adding new work and platforms like instagram didn't really feel like a proper setting to upload
        my small W.I.P. artworks.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: create1,
        thirdPara1: `I really loved working on connecting the backend with a user interface. With how easy
        Django makes user authentication with built in models, you could get a backend up and functioning relatively quickly.
        This was my first time working with classes and using some OOP with inheritance so that was really interesting. 
        I've barely scratched the surface of OOP and I want to base a whole project around it in the future. Using AWS S3 buckets was 
        a breeze, locally, but a horror when trying to get the project deployed.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: create2,
        thirdPara2: `Deployment to Heroku had a lot of issues and these issues were mainly involving the S3 bucket uploading.
        It would simply not cooperate in uploading to the correct directory, or any directory at all. There was also a lot of issues
        around form submission from the frontend to the backend. The tags array had to be formatted in a certain way in order for it to be
        recognized by django as a valid submission. I solved this by stringifying the array on submission and splitting it on retrieval.`,
        position: 'Independent Project',
        year: '2021',
        category: 'Full-Stack Web Application'
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
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: whatif1,
        thirdPara1: `This project really helped me understand the way React renders items and stores states.
        My big takeaways are conditional rendering and formatting Jsx in a way that accounts for data that hasn't been fetched yet.
        Using a new library like Recharts was amazing and pretty eyeopening on how these resources can enhance your projects by a ton.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: whatif2,
        thirdPara2: `Traversing deep into objects was one of my greatest challenges. Getting that 'cannot read undefined' error haunted me
        until I finally understood how to load API data into states that were already formatted in the same way. I also ran into some performance
        issues which I believe was due to some CSS settings, but found that it was only on my computer when testing on different devices.`,
        position: 'Independent Project',
        year: '2021',
        category: 'Front-End Web Application '
      },
      {
        name: 'home-page',
        color: 'color2',
        art: homepageArt,
        title1: 'Home.',
        title2: 'Browser Homepage',
        title3: 'React, CSS, HTML, JavaScript',
        link1: 'https://brian99na.github.io/HomePage/',
        link2: 'https://github.com/brian99na/HomePage',
        secTitle1: 'About.',
        secPara: `I created this project hoping to gain more experience with APIs. It began with the aim of cloning
        an addon called Momentum, but quickly evolved into a mixture of that and the google chrome new tab page. 
        It uses a weather and background API and localstorage to save user added website shortcuts.
        to save user added websites.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: home1,
        thirdPara1: `This project gave me the much needed practice with using APIs. 
        I really enjoyed working with localstorage because I had just learned MongoDB and it felt familiar to me.
        I was able to transfer this knowledge to a later project called Create with storing authentication tokens.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: home2,
        thirdPara2: `This project was so much more complicated that it appeared on the surface. There was so many
        intricacies with setting up the time format, setting up the weather icons from a different resource to match 
        weather conditions from the API, and much more. `,
        position: 'Independent Project',
        year: '2021',
        category: 'Front-End Web Application'
      },
      {
        name: 'mad-libs',
        color: 'color3',
        art: madlibArt,
        title1: 'Madlibs!',
        title2: 'Word Game',
        title3: 'React, CSS, HTML, JavaScript, MongoDB/Mongoose, Express',
        link1: 'https://mongomisfits.github.io/mad-libs-frontend/#/',
        link2: 'https://github.com/MongoMisfits',
        secTitle1: 'Our thought process.',
        secPara: `We wanted to base our full stack application around a game that allowed users to be both the creators and
        users. We decided on the game 'Madlibs' which is a word game that creates random stories. It features full CRUD functionality
        and seeks to be a quick and easy game you can have fun with.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: madlib1,
        thirdPara1: `This game was really fun to make simply because we were able to create our own stories and seed it into our backend.
        I got to experiment a lot with css and added animations that mimicked cards. All my previous experience with using APIs came in handy
        and I was able to easily fetch data from our backend and pass that data around to different components that other team members were able to use.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: madlib2,
        thirdPara2: `The team aspect was definitely a change of pace and environment. One of our team members formatted our
        seed data in the backend into an object of arrays instead of an array of objects which made it hard to work with. I found that you
        can't be afraid to step on some toes and it is essential to communicate with team members on what you need from them and ask what they need from you.`,
        position: 'Backend Routes & User Model, Frontend Styling & Game/Results Page',
        year: '2021',
        category: 'Full-Stack Web Application'
      }
  ]

  const projectsJsx = templateArr.map((project) => {
    return(
      <Route path={`/projects/${project.name}`} exact element={<ProjectTemplate pageLeave={pageLeave} setPageLeave={setPageLeave}
        title1={project.title1} title2={project.title2} title3={project.title3} link1={project.link1} link2={project.link2}
        secTitle1={project.secTitle1} secPara={project.secPara} color={project.color} art={project.art}
        thirdTitle1={project.thirdTitle1} thirdTitle2={project.thirdTitle2} thirdPara1={project.thirdPara1} thirdPara2={project.thirdPara2}
        thirdImage1={project.thirdImage1} thirdImage2={project.thirdImage2} category={project.category} position={project.position} year={project.year}/>}/>
    )
  })

  return (
    <div className="App">
      <Header pageLeave={pageLeave} setPageLeave={setPageLeave} contactHeader={contactHeader} setContactHeader={setContactHeader} projectHeader={projectHeader} setProjectHeader={setProjectHeader}/>
      <Routes>
        <Route path="/" exact element={<Home pageLeave={pageLeave} setPageLeave={setPageLeave} contactHeader={contactHeader} setContactHeader={setContactHeader} projectHeader={projectHeader} setProjectHeader={setProjectHeader}/>}/>
        <Route path="/about" exact element={<About pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        <Route path="/resume" exact element={<Resume pageLeave={pageLeave} setPageLeave={setPageLeave}/>}/>
        {projectsJsx}
      </Routes>
    </div>
  );
}

export default App;
