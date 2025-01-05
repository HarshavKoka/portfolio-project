import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='navbar'>
            <a href="/" className='navbar_title'>Portifolio
            </a>
            <div className='navbar_menu'>
                <ul className='navbar_menuItems'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul></div></nav >


    )

}
export default Navbar