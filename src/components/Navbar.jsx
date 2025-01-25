import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Webaffinity from '../assets/Webaffinity.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='z-[999]'>
            {/* sm:px-[5ve] md:px-[7vw] lg:px-[9vw] */}
            <header className="px-2  sm:px-[5ve] md:px-[5vw] lg:px-[9vw] ">
                <div className="logo-with-text">
                    <a href=""><img src={Webaffinity} alt="Logo Webaffinity"
                        className="header-logo" /></a>
                    <p className="logo-text">Web-Entwicklung und Design</p>
                </div>
                <nav className='hiddenNavbar'>
                    <ul>
                        <Link to={"/"}><li className="categorie animated-underline p-1"><a href="#hero">STARTSEITE</a></li></Link>
                        <Link to={"/tools"}><li className="categorie animated-underline p-1"><a href="">TOOLS</a></li></Link>
                        <Link to={"/blogs"}><li className="categorie animated-underline p-1"><a href="">KNOWLEDGE BASE</a></li></Link>
                        <Link to={"/kontakt"}><li><a href="./contact.html" className="beratung-btn categorie">KOSTENLOSE BERATUNG</a></li></Link>
                    </ul>
                </nav>
                <button
                    className="xl:hidden p-2 rounded-md text-gray-700 absolute right-3 top-5"
                    onClick={() => setVisible(!visible)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </header>

            {/* Hamburger Menü (Mobil) */}


            {/* Mobile Dropdown Menu */}
            <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <button
                    className="absolute top-5 right-5 text-3xl"
                    onClick={() => setVisible(false)}
                >
                    &times;
                </button>
                <Link to="/" className="text-2xl" onClick={() => setVisible(false)}>STARTSEITE</Link>
                <Link to="/tools" className="text-2xl" onClick={() => setVisible(false)}>TOOLS</Link>
                {/* <Link to="/blogs" className="text-2xl" onClick={() => setVisible(false)}>KNOWLEDGE BASE</Link> */}
                <Link to="/kontakt" className="text-2xl p-2 border-2 border-black rounded-lg" onClick={() => setVisible(false)}>KOSTENLOSE BERATUNG</Link>
            </div>
        </div>
    );
}

export default Navbar;
