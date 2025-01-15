import React from 'react'
import ContactButton from './ContactButton'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className=" py-16 max-w-[1400px] mx-auto lg:mt-20">

            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:mb-4 sm:mb-2 mt-10">SCHNITZEREIEN</h1>
            <p className="md:text-5xl sm:text-4xl text-3xl italic font-light mb-8">Christoph Müller</p>
            <p className="max-w-2xl light-text mb-8">
                Schön dass ihr hergefunden habt. Hier geht es um eines meiner Hobbys,
                dem Schnitzen, speziell das Herausarbeiten verschiedenster Fratzen
                für Perchtenmasken bereitet mir besondere Freude!
            </p>
            <div className="flex  space-x-4">

                <ContactButton></ContactButton>
                <Link to={"/meine-arbeit"}>
                    <button className="bg-yellow-light md:text-lg sm:text-md bg-yellow text-black py-3 px-10 ">
                        MEINE ARBEIT
                    </button>
                </Link>


            </div>

        </div>
    )
}

export default Hero
