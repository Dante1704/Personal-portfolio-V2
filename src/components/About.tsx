import { Link } from 'react-router-dom'
import profile from '../images/Profile-Picture.jpeg'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import Twitter from '../images/twitter.png'
import HTML from '../images/tech_stack_icons/html.png'
import CSS from '../images/tech_stack_icons/css-3.png'
import Bootstrap from '../images/tech_stack_icons/bootstrap.png'
import Tailwind from '../images/tech_stack_icons/tailwind-css.svg'
import javascript from '../images/tech_stack_icons/js.png'
import react from '../images/tech_stack_icons/react.png'
import redux from '../images/tech_stack_icons/redux.png'
import node from '../images/tech_stack_icons/node-js.png'
import express from '../images/tech_stack_icons/express.png'
import sequelize from '../images/tech_stack_icons/sequelize.png'
import postgres from '../images/tech_stack_icons/postgresql.png'
import git from '../images/tech_stack_icons/git.png'

import '../index.css'

const About = (): JSX.Element => {
  return (
   <>
     <h2 className='text-[#eee1ff] text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-44'>About Me</h2>
     <section id='about' className='text-[#eee1ff] mt-32'>
         <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
            <div className="flex flex-col justify-center items-center">
              <div className="avatar">
                <div className="rounded-full">
                  <img src={profile} className="max-w-xs" alt="Dante's profile"/>
                </div>
              </div>
              <Link to="/pdf" className="btn btn-lg bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff] mt-14" target="_blank">
                  GET MY RÉSUMÉ
              </Link>
              <div className='w-4/5 mx-auto mt-14 flex justify-around'>
                <div className='flex flex-col items-center'>
                  <a href='https://www.linkedin.com/in/dante-nicolas-kaddarian-39696a131/' target="_blank" rel="noreferrer"><img src={LinkedIn} className="max-w-[32px] icon-link" alt="go to Dante's linkedin"/></a>
                  <span className=''>LinkedIn</span>
                </div>
                <div className='flex flex-col items-center'>
                  <a href='https://twitter.com/kaddarian' target="_blank" rel="noreferrer"><img src={Twitter} className="max-w-[32px] icon-link" alt="go to Dante's twitter"/></a>
                  <span className=''>Twitter</span>
                </div>
                <div className='flex flex-col items-center'>
                  <a href='https://github.com/Dante1704' target="_blank" rel="noreferrer">
                    <img src={GitHub} className="max-w-[32px] turn-white icon-link invert" alt="go to Dante's github"/>
                  </a>
                  <span className=''>GitHub</span>
                </div>
              </div>
            </div>
          <div>
            <div className='max-w-2xl mt-14 md:mt-0'>
              <div className="px-4 flex flex-col justify-center items-start">
                <span className='mb-6 text-2xl font-bold md:text-3xl'>
                Hi! I&apos;m Dante,
                </span>
                <p className='mb-6 xl:leading-loose'>
                At 18 years of age, I got my first job as a letter carrier for 6 months. Then, I went to work in a private transport agency in customer service, and here I was for 7 years and some months. The following year, when I was 19 years old and a year after starting this job, I decided to start studying computer engineering at the University of Buenos Aires at the same time I was working where after the first two years, I developed my logic by passing subjects such as mathematical analysis 1 and 2, linear algebra, introduction to physics, physics 1, introduction to chemistry and algorithms 1, among others.
                </p>
                <p className='mb-6 xl:leading-loose'>
                At the age of 25, I decided to change course and try something different.
                I started a new career as a high school mathematics teacher at the same time I got a new job. This time, in the automotive industry,  but as an administrative billing clerk where I worked for almost 5 years.
                </p>
                <p className='mb-6 xl:leading-loose'>
                In December 2021, at 30 years of age and with some money saved, I decided to go back to programming without the certainty that this was my thing. In the first semester of 2022, I studied on my own and realized that I needed to share this path with people who were also trying to learn web development. Between March and May of this year, I had the opportunity to lead a group of people who had to census a sector of the population in what was the May 2022 census in Argentina. It was an enriching experience since I was in charge of 7 people to whom I also had to teach how to do their job. In August of the same year, I started the FullStack Web developer career in which I learned mainly the JavaScript ecosystem and what it is to work in a team, which I loved. In January 2023, I finished the career where we programmed hundreds of hours and many times for many hours a day, and still, the next day I was still getting up with a lot of desire to program. Programming for so many hours, the web development community, working in a team, and how fun it is to do this, led me to the determination that this is what I want to do. Now I keep learning every day because technology is advancing fast. I want to work as a full stack, front-end, or back-end developer in a team where we can get to know each other and help each other in our work.
                </p>
              </div>
            </div>
            <div className='px-4'>
             <h4 className="text-xl font-bold mt-5 mb-3">
                My Tech Stack
             </h4>
             <div className="grid grid-cols-4 gap-4">
                <div className='flex flex-col items-center'>
                  <img src={HTML} className="max-w-[32px] icon-link" alt="css icon"/>
                  <span>HTML</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={CSS} className="max-w-[32px] icon-link" alt="css icon"/>
                  <span>CSS</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={Bootstrap} className="max-w-[32px] icon-link" alt="bootstrap icon"/>
                  <span>Bootstrap</span>
                </div>
                <div className='flex flex-col items-center self-end'>
                  <img src={Tailwind} className="max-w-[32px] icon-link" alt="Tailwind CSS icon"/>
                  <span>TailwindCSS</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={javascript} className="max-w-[32px] icon-link" alt="JavaScript icon"/>
                  <span>JavaScript</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={react} className="max-w-[32px] icon-link" alt="react icon"/>
                  <span>ReactJS</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={redux} className="max-w-[32px] icon-link" alt="redux icon"/>
                  <span>Redux</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={node} className="max-w-[32px] icon-link" alt="node icon"/>
                  <span>NodeJS</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={express} className="max-w-[32px] icon-link invert" alt="express icon"/>
                  <span>ExpressJS</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={sequelize} className="max-w-[32px] icon-link" alt="sequelize icon"/>
                  <span>Sequelize</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={postgres} className="max-w-[32px] icon-link" alt="postgres icon"/>
                  <span>PostgreSQL</span>
                </div>
                <div className='flex flex-col items-center'>
                  <img src={git} className="max-w-[32px] icon-link" alt="git icon"/>
                  <span className="text-center">Git & GitHub</span>
                </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
  )
}

export default About
