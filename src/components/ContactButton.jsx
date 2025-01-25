import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = () => {
    return (
        <div>
            <Link to={"/kontakt"}>
                <button className="px-12 py-4 bg-black text-white rounded-lg border-[2px] border-black hover:bg-transparent hover:text-black transition">
                    KONTAKT
                </button>
            </Link>
        </div>
    )
}

export default ContactButton
