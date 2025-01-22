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
                    <div><h3>Frontend Developer</h3>
                        <p>I'm Frontend developer with basic knowledge</p></div></li><li className='about__item'>
                        <img src={serverIcon} alt='' />
                        <div><h3>Sql Developer</h3>
                            <p>I'm Sql developer with database knowledge</p></div></li><li className='about__item'>
                        <img src={cursorIcon} alt='' />
                        <div><h3>Python developer</h3>
                            <p>I'm python developer with basic coding knowledge </p></div></li></ul></div>
        </section>
    )
}

export default About