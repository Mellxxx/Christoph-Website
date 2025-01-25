import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoQrFast from "../assets/LogoQrFast.png"

const Tools = () => {
    return (
        <div className='px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw] mt-40 max-w-[1400px] mx-auto'>
            <h1 className='mt-20 text-3xl mb-8'>Nützliche Tools</h1>
            <a href="https://qrfast.netlify.app/" target='_blank'>
                <div className='bg-slate-100 p-10 rounded-2xl flex flex-col gap-4 items-center sm:flex-row max-w-[1000px] mx-auto'>
                    <div>
                        <h2 className='text-pink-800 text-3xl font-medium mb-4'>QR Fast</h2>
                        <p className='light-text'>Unser free to use Qr Code Generator ermöglicht es in Sekunden schnelle Informationen wie URL´s u. co. in einen personalisierten QR-Code zu verwandeln.</p>
                        <button class="bg-black text-white px-12 py-4 rounded-lg mt-4 hover:border-black  " href="">
                            Jetzt ausprobieren!
                        </button>
                    </div>
                    <div>
                        <img src={LogoQrFast} className="max-w-[200px] max-h-[200px]" alt="" />
                    </div>
                </div>

            </a>
        </div>
    )
}

export default Tools
