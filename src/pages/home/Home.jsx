import React from 'react';

import "./Home.scss";

import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

import { cards, projects } from '../../data'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CategoryCard key = {card.id} item={card}/>
        ))}
      </Slide>
      <div className='features'>
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="https://res.cloudinary.com/dpmd0fdsa/video/upload/v1684215214/video/video_qhaddo.mp4?auto=compress&cs=tinysrgb&w=1600&lazy=load" controls></video>
          </div>
        </div>
      </div>


      <div className='features dark'>
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Talent matching
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Business payment solutions
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dpmd0fdsa/image/upload/v1684218040/business/business-desktop_nxi5ho.webp?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(project => (
          <ProjectCard key = {project.id} item={project}/>
        ))}
      </Slide>


    </div>
  )
}

export default Home