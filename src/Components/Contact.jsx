import React from 'react'
import emailIcon from "../assets/emailIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"

const Contact = () => {
    return <footer className='contact__container' id='contact'><div className="contact__text">
        <h2>Contact</h2>
        <p>Feel free to reach out</p></div>
        <ul className="contact__links">
            <li className="contact__link"><img src={emailIcon} alt='' /><a href='
            https://www.linkedin.com/'>kokaharsha2203</a></li>
            <li className="contact__link"><img src={linkedinIcon} alt='' /><a href='
            '>linkedin.com/KokaHarsha</a></li>
            <li className="contact__link"><img src={githubIcon} alt='' /><a href='
           https://github.com/'>github.com/kokaHarsha</a></li>
        </ul></footer>
}

export default Contact