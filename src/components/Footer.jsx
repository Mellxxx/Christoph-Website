import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className=' w-full pb-5'>
            <div className='max-w-[1400px] mx-auto flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] px-8 pt-10 sm:px-[5ve] md:px-[7vw] lg:px-[9vw] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <p className='italic font-kursive mb-5'>Hier finden Sie mich</p>
                    <ul className="flex flex-col gap-1">
                        <li>Maltheserstraße 3</li>
                        <li>9556 Liebenfels</li>
                    </ul>
                </div>
                <div >
                    <p className='italic font-kursive mb-5'>Rechtliches</p>
                    <ul className="flex flex-col gap-1">
                        <Link to={"/impressum"}><li>Impressum</li></Link>
                        <Link to={"/datenschutz"}><li>Datenschutzerklärung</li></Link>
                    </ul>
                </div>

                <div>
                    <p className='italic font-kursive mb-5'>Links</p>
                    <ul className="flex flex-col gap-1">
                        {/* <Link to={"/about-me"}><li>About</li></Link> */}
                        <Link to={"/kontakt"}><li>Kontakt</li></Link>
                    </ul>
                </div>
            </div>

            <div className=''>
                <h1></h1>
                <hr className='color-[#F7DB3B]'></hr>
                <p className='mt-5 text-sm text-center'>© Webaffinity e.U. | 2025 Alle Rechte Vorbehalten</p>
            </div>
        </div>
    )
}

export default Footer

