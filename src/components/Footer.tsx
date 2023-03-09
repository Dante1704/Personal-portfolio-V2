import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import Twitter from '../images/twitter.png'

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-[#e6e7ff] text-[#0c0019]'>
      <div className='min-h-[250px] flex flex-col gap-10 md:flex-row md:items-center md:justify-evenly flex-wrap lg:gap-10 max-w-5xl m-auto'>
        <p className="hidden w-12 h-12 p-2.5 align-bottom rounded-full text-white text-center bg-black font-bold normal-case text-xl md:block md:self-start md:mt-10">DK</p>
        <nav>
          <ul className='flex flex-col items-center'>
          <li><a href="#projects" className={'min-w-[120px] btn btn-ghost mb-2 md:text-xl text-[#0c0019]'}>PROJECTS</a></li>
          <li><a href="#about" className={'min-w-[120x] btn btn-ghost mb-2 md:text-xl text-[#0c0019]'}>ABOUT</a></li>
          <li><a href="#contact" className={'min-w-[120px] btn btn-ghost mb-2 md:text-xl text-[#0c0019]'}>CONTACT</a></li>
          </ul>
        </nav>
        <div className='flex flex-row justify-evenly md:flex-col md:gap-5'>
          <div className='flex flex-col items-center'>
            <a href='https://www.linkedin.com/in/dante-nicolas-kaddarian-39696a131/' target="_blank" rel="noreferrer">
              <img src={LinkedIn} className={'max-w-[32px]'} alt="go to Dante's linkedin"/>
            </a>
            <span>LinkedIn</span>
          </div>
          <div className='flex flex-col items-center'>
            <a href='https://twitter.com/kaddarian' target="_blank" rel="noreferrer">
              <img src={Twitter} className={'max-w-[32px]'} alt="go to Dante's twitter"/>
            </a>
            <span>Twitter</span>
          </div>
          <div className='flex flex-col items-center'>
            <a href='https://github.com/Dante1704' target="_blank" rel="noreferrer">
              <img src={GitHub} className={'max-w-[32px]'} alt="go to Dante's github"/>
            </a>
            <span>GitHub</span>
          </div>
        </div>
      </div>
      <div className='mt-10 pb-2'>
        <p className='text-center'>
          Technologies used for this portfolio: ReactJS, TaiwindCSS, and DaisyUI.
        </p>
        <p className='text-center'>
          Icons created by <a href="https://www.flaticon.com/" title="flaticon" target="_blank" rel="noreferrer" className='link'>Flaticon</a>
        </p>
        <p className='text-center'>
            <a href="https://iconscout.com/icons/redux" target="_blank" rel="noreferrer" className='link'>
            Redux Icon
            </a>
            &nbsp;by&nbsp;
            <a href="https://iconscout.com/contributors/icon-mafia" target="_blank" rel="noreferrer" className='link'>
            Icon Mafia
            </a>
         </p>
      </div>
    </footer>
  )
}

export default Footer
