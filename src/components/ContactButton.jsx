import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = () => {
    return (
        <div>
            <Link to={"/kontakt"}>
                <button className="bg-yellow-500 md:text-lg bg-yellow text-black py-3 px-10 sm:text-md">
                    KONTAKT
                </button>
            </Link>
        </div>
    )
}

export default ContactButton
