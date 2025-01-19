import React, { useState } from 'react'
import placeholder from '../assets/placeholder.jpg'
import placeholder2 from '../assets/placeholder2.jpg'
import ContactButton from '../components/ContactButton'
import close from '../assets/close.png'
import leftarr from '../assets/Arrow left.png'
import rightarr from '../assets/Arrow right.png'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.webp'
import img6 from '../assets/6.webp'
import img7 from '../assets/7.webp'
import img8 from '../assets/8.webp'
import img9 from '../assets/9.webp'
import img10 from '../assets/10.webp'
import img11 from '../assets/11.webp'
import img12 from '../assets/12.webp'
import img13 from '../assets/13.webp'
import img14 from '../assets/14.webp'
import img15 from '../assets/15.webp'
import img16 from '../assets/16.webp'
import img17 from '../assets/17.webp'
import img18 from '../assets/18.webp'
import img19 from '../assets/19.webp'
import img20 from '../assets/20.webp'

const Gallery = () => {

    // Image Array
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

    // State to track the index of the currently selected image. `null` means no image is selected.
    const [currentIndex, setCurrentIndex] = useState(null);

    // Function to close the modal
    const handleCloseModal = () => {
        setCurrentIndex(null);
    }

    // Function to show the previous image
    const handlePrev = (e) => {
        e.stopPropagation(); // Prevent closing the modal when clicking the button
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    }

    // Function to show the next image
    const handleNext = (e) => {
        e.stopPropagation(); // Prevent closing the modal when clicking the button
        setCurrentIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    }

    return (
        <div>
            <div className='flex flex-col justify-center lg:mt-40 md:mt-20 sm:mt-20 mt-20'>
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1 ">GALLERIE</h1>
                <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">Meine vergangenen Projekte</p>
            </div>

            {/* Gallery Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {images.map((imageSrc, index) => (
                    <img
                        key={index}
                        src={imageSrc}
                        alt=""
                        onClick={() => setCurrentIndex(index)}
                        className="cursor-pointer"
                    />
                ))}
            </div>

            {/* Modal Overlay */}
            {currentIndex !== null && (
                <div
                    className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50'
                    onClick={handleCloseModal}
                >
                    {/* Modal Content */}
                    <div className='relative' onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            className='absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none'
                            onClick={handleCloseModal}
                        >
                            <div className='rounded-full bg-white w-12 h-12 flex items-center justify-center'>
                                <img className="w-10 h-10" src={close} alt="" />
                            </div>
                        </button>

                        {/* Previous Button */}
                        <button
                            className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none'
                            onClick={handlePrev}
                        >
                            <div className='rounded-full bg-white w-12 h-12 flex items-center justify-center'>
                                <img className="w-10 h-10" src={leftarr} alt="" />
                            </div>
                        </button>

                        {/* Next Button */}
                        <button
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none'
                            onClick={handleNext}
                        >
                            <div className='rounded-full bg-white w-12 h-12 flex items-center justify-center'>
                                <img className="w-10 h-10" src={rightarr} alt="" />
                            </div>
                        </button>

                        {/* Enlarged Image */}
                        <img src={images[currentIndex]} alt="" className='max-h-screen max-w-full' />
                    </div>
                </div>
            )}

            <div className='flex justify-center mt-10'>
                <ContactButton />
            </div>
        </div>
    )
}

export default Gallery
