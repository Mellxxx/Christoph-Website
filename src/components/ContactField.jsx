import React from 'react'

const Contact = () => {
    return (
        <div className='max-w-[1000px] mx-auto bg-yellow-only p-10 mt-40'>
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1">KONTAKT</h1>
            <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">kostenlos, unverbindlich</p>
            <div className='flex flex-col grid-cols-[1fr_1fr_2fr] gap-4 sm:grid '>
                <div className='sm:mb-4 md:mb-0'>
                    <p>Telefon</p>
                    <p>+43 676 8980 8762</p>
                    <button onClick={() => window.open('tel:+43 67689808762')} className="bg-black md:text-md sm:text-md text-white py-3 px-10 mt-2">
                        ANRUFEN
                    </button>
                </div>
                <div>
                    <p>Mail</p>
                    <p>christophmueller15.05@gmx.at</p>
                    <button onClick={() => window.open('mailto:christophmueller15.05@gmx.at')} className="bg-black md:text-md sm:text-md text-white py-3 px-10 mt-2">
                        MAIL
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
