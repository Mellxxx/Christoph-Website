import React from 'react'
import placeholder from '../assets/placeholder.jpg'
import { Link } from 'react-router-dom'

const SmallGallery = () => {
    return (
        <div>
            <div className='flex flex-col mt-40 sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr]'>
                <div className='m-3'>
                    <img src={placeholder} alt="" />
                </div>
                <div className='m-3'>
                    <img src={placeholder} alt="" />
                </div>
                <div className='m-3'>
                    <img src={placeholder} alt="" />
                </div>
                <div className='m-3'>
                    <img src={placeholder} alt="" />
                </div>
                <div className='m-3'>
                    <img src={placeholder} alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to={"/galerie"}>
                    <button className="bg-yellow md:text-md mx-auto sm:text-md bg-yellow text-black py-2 px-7 ">
                        GALERIE
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SmallGallery
