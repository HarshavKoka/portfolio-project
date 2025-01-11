import React from 'react';
import hero from "../images/PHOTO.jpeg";

const Hero = () => {
    return (
        <section className='hero__container'>
            <div className='hero__content'>
                <h1 className='hero__title'>Hi, I am Harsha Vardhan Koka</h1>
                <p className='hero__description'>I'm a front-end developer</p>
                <a href='mailto:kokaharsha2203@gmail.com' className='hero__contactBtn'>Contact Me</a>
            </div>
            <img src={hero} alt='Hero' className='hero__img' />
            <div className='hero__topBlur'></div>
            <div className='hero__bottomBlur'></div>
        </section>
    );
};

export default Hero;
