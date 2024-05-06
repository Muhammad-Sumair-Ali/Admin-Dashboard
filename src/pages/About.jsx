import React from 'react';
import Layout from '../components/Layout';
import './About.css';
import OwnerPic from '../assets/sumairPic.jpg';
const About = () => {
  

  return (
    <Layout>
      <section className="about-us">
        <div className="about">
          <img src={OwnerPic} class="pic"/>
          <div className="text">
            <h2>About Us</h2>
            <h5>
              Front-end Developer &amp; <span>Designer</span>
            </h5>
            <p>
              hey i'm <span> Muhammad Sumair </span>I'm a frontend developer hailing from Karachi, specializing in crafting captivating user interfaces. With a penchant for clean code and an eye for design, I breathe life into digital experiences. Let's collaborate and build something amazing together.
            </p>
            <div className="data">
              <a href="#" className="hire">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
