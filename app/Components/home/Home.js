
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Mypic from "../../../public/images/king.jpg";
import Image from 'next/image';

const Home = () => {
  return (
   <section className='home container grid px-5' id='home'>
   <div className='intro grid'>
    <h1 className='home__name'>Anil Singh</h1>
    <span className='home__education mb-3'>
      Frontend Developer | UI/UX Designer
    </span>

    {/* <HeaderSocials/> */}

    <a href='#contact' className='primary-btn'>Hire Me</a>
    <ScrollDown/>
   </div>

   <div className='intro grid m-auto'>
    <Image src={Mypic} alt='sideLogo' />
   </div>
    <ScrollDown/>

   <Shapes/>

   </section> 
  )
}

export default Home

