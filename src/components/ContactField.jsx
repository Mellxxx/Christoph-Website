import React from 'react'
import Men from "../assets/Men.png"

const Contact = () => {
    return (
        <div className='relative max-w-[1000px] mx-auto bg-[#6abca533] p-10 mt-8 lg:mt-14 rounded-xl overflow-hidden md:overflow-visible'>
            {/* Extra Wrapper für das Clipping des Kreises */}

            {/* Der Kreis – wird von overflow-hidden abgeschnitten */}
            <div className='absolute w-[400px] h-[400px] right-[-80px] bottom-[-120px] md:hidden rounded-full bg-[#6abca57f] z-[0]' />


            {/* Das Bild – außerhalb des Wrappers, damit es sichtbar bleibt */}
            <img src={Men} className='absolute w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] right-[-20px] hidden md:block bottom-[0] z-[1]' alt="" />

            <div className='flex flex-col grid-cols-[1fr_1fr_2fr] z-[1] gap-4 sm:grid'>
                <div className='sm:mb-4 md:mb-0 z-[2]'>
                    <p className='light-text'>Telefon</p>
                    <p>+43 676 8980 7433</p>
                    <button onClick={() => window.open('tel:+43 67689807433')} className="rounded-lg bg-black border-[2px] border-black hover:scale-[1.05] hover:bg-transparent hover:text-black transition md:text-md sm:text-md text-white py-3 px-10 md:py-4 md:px-16 mt-2">
                        ANRUFEN
                    </button>
                </div>
                <div className='z-[2]'>
                    <p className='light-text'>Mail</p>
                    <p>mueller.thomas@webaffinity.at</p>
                    <button onClick={() => window.open('mailto:mueller.thomas@webaffinity.at')} className=" rounded-lg bg-black border-[2px] border-black hover:scale-[1.05] hover:bg-transparent hover:text-black transition md:text-md sm:text-md text-white py-3 px-10 md:py-4 md:px-16 mt-2">
                        MAIL
                    </button>
                </div>
                <div className='z-[2]'>
                    <img src={Men} className='mb-[-40px] md:hidden' alt="" />
                </div>
            </div>
        </div>

    )
}

export default Contact
