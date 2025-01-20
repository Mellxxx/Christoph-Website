import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import ContactButton from '../components/ContactButton'
import placeholder from '../assets/placeholder.jpg'
import SmallGallery from '../components/SmallGallery'
import ContactField from '../components/ContactField'
import img11 from '../assets/11.webp'
import MapComponent from '../components/MapContainer';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero></Hero>


            {/* Work Section */}
            <div className='md:mt-40 sm:mt-10 flex flex-col sm:grid grid-cols-[1fr_1fr]'>
                <div className="md:hidden sm:block">
                    <img className="mb-8" src={placeholder} alt="" />
                </div>
                <div>
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1">SCHNITZEN</h1>
                    <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">in Ihrem Auftrag</p>
                    <p className="max-w-2xl light-text mb-8">
                        Sowohl Krampusmasken, Motorsägen gefertigte lebensgroße Figuren, oder auch Zierobjekte wie Materl vereinen handwerkliches Können mit natürlicher Ästhetik. Der Milliarden Jahre alte Baustoff Holz ermöglicht fast alles. Du bist nicht überzeug? Hier findest du eine genauere Beschreibung zu meinen Designmethoden und ihrem Ergebnis– nämlich Kunst!
                    </p>
                    <div className="flex  space-x-4">
                        <Link to={"/meine-arbeit"}>
                            <button className="bg-yellow md:text-md sm:text-md bg-yellow text-black py-2 px-7 ">
                                MEINE ARBEIT
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:mt-20 lg:mt-0 md:block pl-10 max-w-[700px]">
                    <img src={placeholder} alt="" />
                </div>
            </div>

            {/* Gallerie */}
            <SmallGallery></SmallGallery>



            {/* About Section */}
            <div className='mt-40 flex flex-col sm:grid grid-cols-[1fr_1fr]'>
                <div className='md:mt-20 lg:mt-0 md-20 max-w-[700px]'>
                    <img className="mb-8" src={img11} alt="" />
                </div>

                <div className='md:pl-10 mt-0 '>
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1">SCHNITZEN</h1>
                    <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">mit Leib und Seele</p>
                    <p className="max-w-2xl light-text mb-8">
                        Vor der Zeit der Dinosaurier, vor etwa 350 Millionen Jahren entwickelten sich Bäume und somit Holz. Unzählige Werkzeuge und Bauwerke wurden seither aus ihm gefertigt. Umso faszinierender ist es doch aus solch einem „alten“ erfahrenen Baustoff auch Kunstwerke zu formen. Du willst wissen, wie mich Holz seit der Kindheit inspiriert?                    </p>
                    <div className="flex  space-x-4">
                        <Link to={"/ueber-mich"}>
                            <button className="bg-yellow md:text-md sm:text-md bg-yellow text-black py-2 px-7 ">
                                ÜBER MICH
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <ContactField></ContactField>
            <MapComponent></MapComponent>
        </div>
    )
}

export default Home
