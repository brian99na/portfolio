import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import About from './components/About/About'
import ProjectTemplate from './components/Projects/ProjectTemplate';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
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
        link1: 'https://brian99na.github.io/create/',
        link2: 'https://github.com/brian99na/create',
        secTitle1: 'My thought process.',
        secPara: `My background is in all types of media creation and I wanted a place to store snippets 
        of work that I could easily show others. I found that a standard portfolio was too restricting
        and platforms like instagram didn't really feel like a proper setting to upload my small W.I.P. artworks.
        I think the simplicity of a site like Create is what I really wanted.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: create1,
        thirdPara1: `I loved the process of creating a full stack application. From testing your backend views/urls through postman to actually 
        implementing it into your frontend, it all gave me a good perspective on what goes on when communicating on different fronts.
        User authentication with Django was amazing because it was already built in. Changing or adding fields was just a matter
        of inheriting the already implemented model. I also dove into AWS S3 buckets and was able to successfully upload and store files
        from the frontend and through the user admin panel.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: create2,
        thirdPara2: `A lot of time was spent deploying to Heroku, so I couldn't implement as many features as I would've liked. 
        I still want more fields added to the user and post models such as a bio, likes on posts, post bookmarks, etc. My
        S3 bucket upload functionality broke when it was deployed, so I am also currently trying to get it up and running. For now, 
        I have replaced that feature with a text field where users can add a direct link to their own uploaded videos or images.`,
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
        This often overshadows the utility these coins provide.
        This website guides users by showing them the aspect they are most familiar with in crypto, the sweet gains.
        It then pivots to explain one of Bitcoin's use cases: being a hedge against inflation.
        This can offer a different perspective on how crypto is offering solutions to massive problems in our financial systems.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: whatif1,
        thirdPara1: `This project really helped me understand the way React renders items and stores states.
        My big takeaways are conditional rendering and formatting Jsx in a way that accounts for data that hasn't been fetched yet.
        Using a library like Recharts was amazing and made me appreciate the importance of creating a visual
        representation of data that you present on your page.`,
        thirdTitle2: 'Struggles.',
        thirdImage2: whatif2,
        thirdPara2: `Traversing deep into objects was one of my greatest challenges. Getting that 'cannot read undefined' error haunted me
        until I finally understood how to load API data into states that were already formatted in the same way. I also became aware of how
        performance can differ between devices as I ran into some performance issues due to some CSS settings. I found that it was only 
        on my computer when testing on different devices. I now test my websites on different devices and use throttling on chrome to see 
        how data loads in and whether I need to accommodate for loading times with skeleton animations.`,
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
        It uses a weather and background API and localstorage to save user added website shortcuts.`,
        thirdTitle1: 'Highlights.',
        thirdImage1: home1,
        thirdPara1: `This project gave me the much needed practice with using APIs. 
        I was able to get a head start working with localStorage which I later used in my fullstack application which utilized tokens.
        This once again taught me the fundamentals of React states and a lot of vanilla javascript methods such as Date. It also helped me connect
        different resources to each other, such as grabbing the correct icon from another site based on the current weather conditions provided from the api, or
        the website icons based on the user input data. `,
        thirdTitle2: 'Struggles.',
        thirdImage2: home2,
        thirdPara2: `This project was so much more complicated that it appeared on the surface. There was so many
        intricacies with setting up the time format using splits and joins, linking up the weather icons to match 
        current weather conditions, and much more.`,
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
        position: 'Group Project - Backend Routes & User Model, Frontend Styling & Game/Results Page',
        year: '2021',
        category: 'Full-Stack Web Application'
      }
  ]

  const projectsJsx = templateArr.map((project, index) => {
    return(
      <Route path={`/projects/${project.name}`} exact element={<ProjectTemplate index={index} pageLeave={pageLeave} setPageLeave={setPageLeave}
        title1={project.title1} title2={project.title2} title3={project.title3} link1={project.link1} link2={project.link2}
        secTitle1={project.secTitle1} secPara={project.secPara} color={project.color} art={project.art}
        thirdTitle1={project.thirdTitle1} thirdTitle2={project.thirdTitle2} thirdPara1={project.thirdPara1} thirdPara2={project.thirdPara2}
        thirdImage1={project.thirdImage1} thirdImage2={project.thirdImage2} category={project.category} position={project.position} year={project.year}/>}/>
    )
  })

  useEffect(() => {
    document.title = "Hey, it's Brian"
  }, [])

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
