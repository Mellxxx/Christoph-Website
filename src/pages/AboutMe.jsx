import React from 'react'
import SmallGallery from '../components/SmallGallery'
import ContactButton from '../components/ContactButton'
import placeholder from '../assets/placeholder.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className='flex flex-col md:mt-20 xl:mt-40 sm:grid grid-cols-[1fr_1fr]'>
                <div className="md:hidden sm:block mt-20">
                    <img className="mb-8" src={placeholder} alt="" />
                </div>
                <div>
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1 ">ÜBER MICH</h1>
                    <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">Schnitzen mit Leib und Seele</p>
                    <p className="max-w-2xl light-text mb-8">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <div className="flex  space-x-4">
                        <ContactButton></ContactButton>
                    </div>
                </div>
                <div className="hidden md:mt-20 lg:mt-0 md:block pl-10">
                    <img src={placeholder} alt="" />
                </div>

            </div>
            <SmallGallery></SmallGallery>
        </div>
    )
}

export default AboutMe
