import React from 'react'
import aboutIcon from '../images/aboutIcon.jpg'
import serverIcon from '../images/serverIcon.png'
import cursorIcon from "../images/cursorIcon.png"

const About = () => {
    return (
        <section className='about__container' id='about'>
            <h2 className='about__title'>About</h2>
            <div className='about__content'><img src={aboutIcon} className='about__img' alt='' />
                <ul className='about__items'><li className='about__item'>
                    <img src={cursorIcon} alt='' />
                    <div><h3>Fronntend Developer</h3>
                        <p>I'm frontend developer with basic knowledge</p></div></li><li className='about__item'>
                        <img src={serverIcon} alt='' />
                        <div><h3>Backdoor Developer</h3>
                            <p>I'm frontend developer with basic knowledge</p></div></li><li className='about__item'>
                        <img src={cursorIcon} alt='' />
                        <div><h3>Fronntend Developer</h3>
                            <p>I'm frontend</p></div></li></ul></div>
        </section>
    )
}

export default About