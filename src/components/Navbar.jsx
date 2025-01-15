import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import close from "../assets/close.png"
import menu from "../assets/Menu.png"

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <nav className="text-white py-0">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="hidden sm:flex space-x-0 mx-auto light-text">
                    <NavLink to="/"><li className="hover:bg-[#F7DB3B] hover:text-black px-5 py-3 cursor-pointer">WILLKOMMEN</li></NavLink>
                    <NavLink to="/meine-arbeit"><li className="hover:bg-[#F7DB3B] hover:text-black px-5 py-3 cursor-pointer">MEINE ARBEIT</li></NavLink>
                    <NavLink to="/ueber-mich"><li className="hover:bg-[#F7DB3B] hover:text-black px-5 py-3 cursor-pointer">ÜBER MICH</li></NavLink>
                    <NavLink to="/galerie"><li className="hover:bg-[#F7DB3B] hover:text-black px-5 py-3 cursor-pointer">GALERIE</li></NavLink>
                    <NavLink to="/kontakt"><li className="hover:bg-[#F7DB3B] hover:text-black px-5 py-3 cursor-pointer">KONTAKT</li></NavLink>
                </ul>

                <img onClick={() => setVisible(true)} src={menu} className="w-5 cursor-pointer sm:hidden absolute right-5 top-5 w-8 h-8" alt="" />

                { /* sidebar menu for smaller screen */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setVisible(false)} className="flex item-center gap-4 p-3 cursor-pointer">
                            <img className="h-4 rotate-180 w-8 h-8 " src={close} alt="" />
                            <p>Zurück</p>
                        </div>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-[#F7DB3B]" to="/">WILLKOMMEN</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-[#F7DB3B]" to="/meine-arbeit">MEINE ARBEIT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-[#F7DB3B]" to="/ueber-mich">ÜBER MICH</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-[#F7DB3B]" to="/galerie">GALERIE</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border border-[#F7DB3B]" to="/kontakt">KONTAKT</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
