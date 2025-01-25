import React from 'react'
import ContactField from '../components/ContactField'

const Contact = () => {
    return (
        <div className='p-4 px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw] mt-10 mt-40 max-w-[1250px] mx-auto'>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold md:mb-2 sm:mb-1">Kontakt</h1>
            <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">Beratungsgespräch kostenlos und unverbindlich</p>

            <ContactField></ContactField>
        </div>
    )
}

export default Contact
