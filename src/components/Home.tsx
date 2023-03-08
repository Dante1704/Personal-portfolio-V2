import Header from './Header'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Home = (): JSX.Element => {
  return (
    <>
      <Header/>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="bg-[#e6e7ff]" >
          <path fill="#4f58fd" fillOpacity="1" d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,80C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path fill="#b3b7fe" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,112C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path fill="#01054c" d="m0,96.71429l80,26.7c80,26.3 240,80.3 400,69.3c160,-11 320,-85 480,-112c160,-27 320,-5 400,5.3l80,10.7l0,224l-80,0c-80,0 -240,0 -400,0c-160,0 -320,0 -480,0c-160,0 -320,0 -400,0l-80,0l0,-224z" id="svg_1"/>
        </svg>
      </div>
      <main className='bg-[#01054c]'>
        <Projects/>
        <About/>
        <Contact/>
      </main>
      <div>
        <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="bg-[#e6e7ff]">
          <path fill="#4f58fd" fillOpacity="1" d="m0,75l80,26.7c80,26.3 240,80.3 400,64c160,-15.7 320,-101.7 480,-138.7c160,-37 320,-27 400,-21.3l80,5.3l0,256l-80,0c-80,0 -240,0 -400,0c-160,0 -320,0 -480,0c-160,0 -320,0 -400,0l-80,0l0,-192z" id="svg_2" transform="rotate(-180 720 133.52)"/>
          <path fill="#b3b7fe" fillOpacity="1" d="m0,0l80,10.7c80,10.3 240,32.3 400,69.3c160,37 320,91 480,101.3c160,10.7 320,-21.3 400,-37.3l80,-16l0,160l-80,0c-80,0 -240,0 -400,0c-160,0 -320,0 -480,0c-160,0 -320,0 -400,0l-80,0l0,-288z" id="svg_3" transform="rotate(-180 720 144)"/>
          {<path fill="#01054c" stroke="null" opacity="undefined" transform="rotate(-180 720 126.473)" d="m0,28.94551l80,26.7c80,26.3 240,80.3 400,69.3c160,-11 320,-85 480,-112c160,-27 320,-5 400,5.3l80,10.7l0,224l-80,0c-80,0 -240,0 -400,0c-160,0 -320,0 -480,0c-160,0 -320,0 -400,0l-80,0l0,-224z" id="svg_1"/>}
        </svg>
      </div>
      <Footer/>
    </>
  )
}

export default Home
