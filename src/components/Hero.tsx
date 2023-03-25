import { Link } from 'react-router-dom'
import profile from '../images/Profile-Picture-1.jpg'
import placeholder from '../images/placeholder.png'
import '../index.css'

const Hero = (): JSX.Element => {
  return (
    <section className="flex justify-center">
       <div className="avatar pt-12 hidden lg:block">
          <div className="mt-36 rounded-full hidden "> {/* lg:block max-w-[300px] 2xl:max-w-[400px] */}
            <img src={profile} className="lg:max-w-xs xl:max-w-md" alt="Dante's profile"/>
          </div>
       </div>
        <div className='max-w-2xl'>
            <div className="mt-36 px-2">
                <img src={placeholder} className="inline" alt="Buenos Aires, Argentina"/>
                <span className='text-[#0c0019]'>&nbsp;&nbsp;Buenos Aires, Argentina</span>
            </div>
            <div className="mt-4 px-3">
              <span className='text-3xl font-bold name-animated md:text-4xl lg:text-5xl'>Dante Nicolas Kaddarian,</span>
              <h1 className='mb-5 text-6xl font-bold profession-animated md:text-8xl lg:text-9xl'>Web Developer</h1>
              <p className='my-8 md:my-16 text-neutral xl:leading-loose text-[#0c0019]'>I am a Web Developer based in Argentina. I have worked in many industries, have completed 2 years of engineering, and have completed 50% math teacher career, as well. Those achievements, allow me to see things from different points of view, to have a logical thinking, and break down a huge problem into little problem and so on until I can start working in the solution. Right now, I am implementing all this in web development because I have discovered, after more than 800hs of programming, that is my passion.</p>
            </div>
            <div className="mt-20 px-3 flex justify-start gap-10">
              <Link to="/pdf" target="_blank"><button className="btn bg-[#23014c] text-[#e6e7ff] hover:bg-[#012a4c]">GET MY RÉSUMÉ</button></Link>
              <a href='mailto:dante.nkaddarian@gmail.com'>
                <button className="btn bg-[#23014c] text-[#e6e7ff] hover:bg-[#012a4c]">email me</button>
              </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
