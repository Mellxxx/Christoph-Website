import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='bg-black w-full'>
            <div className='max-w-[1400px] mx-auto text-white flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] px-8 pt-10 sm:px-[5ve] md:px-[7vw] lg:px-[9vw] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <p className='italic font-kursive text-yellow mb-5'>Hier finden Sie mich</p>
                    <ul className="flex flex-col gap-1">
                        <li>Maltheserstraße 3</li>
                        <li>9556 Liebenfels</li>
                    </ul>
                </div>
                <div >
                    <p className='italic font-kursive text-yellow mb-5'>Rechtliches</p>
                    <ul className="flex flex-col gap-1">
                        <Link to={"/impressum"}><li>Impressum</li></Link>
                        <Link to={"/datenschutz"}><li>Datenschutzerklärung</li></Link>
                    </ul>
                </div>

                <div>
                    <p className='italic font-kursive text-yellow mb-5'>So erreichen Sie mich</p>
                    <ul className="flex flex-col gap-1">
                        <li>+43 67689808762</li>
                        <li>christophmueller15.05@gmx.at</li>
                    </ul>
                </div>
            </div>

            <div className=''>
                <h1></h1>
                <hr className='color-[#F7DB3B]'></hr>
                <p className='py-5 text-sm text-center text-white'>Copyright © 2024 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer

