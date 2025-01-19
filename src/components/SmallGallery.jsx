import React from 'react'
import placeholder from '../assets/placeholder.jpg'
import { Link } from 'react-router-dom'
import img12 from '../assets/12.webp'
import img13 from '../assets/13.webp'
import img8 from '../assets/8.webp'
import img18 from '../assets/18.webp'
import img14 from '../assets/14.webp'

const SmallGallery = () => {
    return (
        <div>
            <div className='flex flex-col mt-40 sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr]'>
                <div className='m-3'>
                    <img src={img12} alt="" />
                </div>
                <div className='m-3'>
                    <img src={img13} alt="" />
                </div>
                <div className='m-3'>
                    <img src={img8} alt="" />
                </div>
                <div className='m-3'>
                    <img src={img18} alt="" />
                </div>
                <div className='m-3'>
                    <img src={img14} alt="" />
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
