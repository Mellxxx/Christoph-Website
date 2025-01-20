import React from 'react'
import SmallGallery from '../components/SmallGallery'
import ContactField from '../components/ContactField'
import MapComponent from '../components/MapContainer';

const Contact = () => {
    return (
        <div>
            <ContactField></ContactField>
            <MapComponent></MapComponent>
            <SmallGallery></SmallGallery>
        </div>
    )
}

export default Contact
