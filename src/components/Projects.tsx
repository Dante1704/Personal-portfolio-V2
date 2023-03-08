import React from 'react'
import { Link } from 'react-router-dom'
import HTML from '../images/tech_stack_icons/html.png'
import CSS from '../images/tech_stack_icons/css-3.png'
import Bootstrap from '../images/tech_stack_icons/bootstrap.png'
import javascript from '../images/tech_stack_icons/js.png'
import react from '../images/tech_stack_icons/react.png'
import redux from '../images/tech_stack_icons/redux.png'
import node from '../images/tech_stack_icons/node-js.png'
import express from '../images/tech_stack_icons/express.png'
import sequelize from '../images/tech_stack_icons/sequelize.png'
import postgres from '../images/tech_stack_icons/postgresql.png'
import git from '../images/tech_stack_icons/git.png'
import ecommerce from '../images/ecommerce.png'
import earth_globe from '../images/earth_globe.png'

const Projects = (): JSX.Element => {
  return (
    <>
      <h2 className=' text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20 text-[#eee1ff]'>Projects</h2>
      <section className='text-[#eee1ff] px-3' id='projects' >
        <article className='mt-32 flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto px-2'>
          <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
            <header>
              <h3 className='mb-6 text-2xl font-bold md:text-3xl'>E-commerce TIENDANUESTRA</h3>
            </header>
            <p className='mb-5 xl:leading-loose'>
            This project is a full stack e-commerce project that we carried out between three people in a period of 4 weeks. We worked as a team with agile SCRUM methodology doing weekly sprints.
            I had already done a fullstack project before, but this time we had to demonstrate that we could learn on our own and quickly learn third party technologies and implement them in our projects.
            </p>
            <span className='text-xl font-bold md:text-2xl'>Functionalities</span>
            <p className='mb-5 xl:leading-loose'>
            Authentication and registration methods for new users, searches, filtering,
            personal and product information management, admin panel, garment purchase, stock update, and purchase history.
            </p>
            <span className='text-xl font-bold md:text-2xl'>My role in this project</span>
            <p className='mb-5 xl:leading-loose'>
            Mainly I developed all the backend. Login, Authentication, user notifications, middlewares, CRUD, ORM logic, database connections and relationships between tables. But I also collaborated with my colleagues in the front-end. I did the combined filtering of products, the communication with the backend, some of the reducers implemented in Redux and the complete styling of the page with React Bootstrap.
            </p>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/ZfC9fFK_SY8" title="TIENDANUESTRA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3 className='mt-14 text-xl font-bold md:text-2xl'>Tech Stack Used in This Proyect</h3>
            <div className="grid grid-cols-4 gap-4 mt-14">
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
          <div className='max-w-sm mx-auto mx-auto lg:mx-0 lg:mr-auto lg:w-8/12'>
            <Link to="http://159.223.195.60:3000/" className="btn btn-lg bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff] mt-14 min-[321px]:mr-4" target="_blank">
            Watch it Live
            </Link>
            <Link to="https://github.com/Dante1704/Henry-s-Final-Project" className="btn btn-lg bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff] min-[321px]:ml-4" target="_blank">
            GitHub
            </Link>
            <img src={ecommerce} className="max-w-[250px] mt-14 hidden lg:block contrast-50" alt="git icon"/>
          </div>
       </article>

       <article className='mt-32 flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto px-2'>
          <div className='w-full md:w-9/12 md:mx-auto lg:max-w-xl'>
            <header>
              <h3 className='mb-6 text-2xl font-bold md:text-3xl'>App Countries</h3>
            </header>
            <p className='mb-5 xl:leading-loose'>
            This was my first full stack project. I carried out on my own along three weeks.
            </p>
            <span className='text-xl font-bold md:text-2xl '>Functionalities</span>
            <p className='mb-5 xl:leading-loose'>
            The app consists of presenting all the countries through pagination in which the current page you are on is marked. Each country has a detail that can be accessed to see the most relevant information about it, you can filter the countries by different criteria, in the search bar you can search for countries that contain the specified letters or syllables, and finally, we can create activities for each country in the activity creation form.
            </p>
            <span className='text-xl font-bold md:text-2xl'>My role in this project</span>
            <p className='mb-5 xl:leading-loose'>
            I developed this project on my own, from the design to the last push to GitHub.
            </p>
            <iframe className='mt-14' width="100%" height="400" src="https://www.youtube.com/embed/4eMzm1UMVLo" title="App Countries" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3 className='mt-14 text-xl font-bold md:text-2xl'>Tech Stack Used in This Proyect</h3>
            <div className="grid grid-cols-4 gap-4 mt-14">
              <div className='flex flex-col items-center'>
                <img src={HTML} className="max-w-[32px] icon-link" alt="css icon"/>
                <span>HTML</span>
              </div>
              <div className='flex flex-col items-center'>
                <img src={CSS} className="max-w-[32px] icon-link" alt="css icon"/>
                <span>CSS</span>
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
          <div className='max-w-sm mx-auto mx-auto lg:mx-0 lg:mr-auto lg:w-8/12'>
            <Link to="https://countries-iu6qy.ondigitalocean.app" className="btn btn-lg bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff] mt-14 min-[321px]:mr-4" target="_blank">
            Watch it Live
            </Link>
            <Link to="https://github.com/Dante1704/PI-countries" className="btn btn-lg bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff] min-[321px]:ml-4" target="_blank">
            GitHub
            </Link>
            <img src={earth_globe} className="max-w-[250px] mt-14 hidden lg:block contrast-50" alt="git icon"/>
          </div>
       </article>
     </section>
    </>
  )
}

export default Projects
