import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';
import Aboutus from "../../../public/images/about.png";
import Image from 'next/image';

const About = () => {
  return (
    <section className='about container section px-5' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <Image src={Aboutus} alt='About'  className='about__img'/>

    <div className='about__data'>
      <div className='about__info'>
        <p className='about__description'>
        I am eager to pursue a dynamic career in IT, leveraging my software development and UX design skills in challenging and innovative projects.
        </p>
        
      </div>

      <div className='row'>
        <div className='col-md-12'>
        <div className='about__skills'>
        <div className='skills__data mb-4'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Development
            </h3>
            <span className='skills__number'>90%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data mb-4'>
          <div className='skills__titles'>
            <h3 className='skills__name'>UI/UX Designing</h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>

        <div className='skills__data mb-4'>
          <div className='skills__titles'>
            <h3 className='skills__name'>DSA</h3>
            <span className='skills__number'>40%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>
      </div>
        </div>
      </div>
      <a href='https://drive.google.com/file/d/1JI7tLvrBHkr6VCBcZJ2RlLq1q4l1_xPt/view?usp=sharing' className='download-btn mt-4' download={"Chetan's Resume"}>Download Resume</a>
    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About