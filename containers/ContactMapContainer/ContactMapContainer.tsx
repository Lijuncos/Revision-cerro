'use client'

import ContactMapComponent from "@/components/ContactMapComponent/ContactMapComponent";
import data from "@/modules/es.json";
import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";


const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const containerStyle = {
    width: '100%',
    height: '25rem',
    borderRadius: '40px'
};

const center = {
    lat: data.contact.map.coordinates.lat,
    lng: data.contact.map.coordinates.lng
};


export default function ContactMapContainer() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey ?? ''

    })

    const [coordinatesPopUp, setCoordinatesPopUp] = useState(-30);
    const [showPopUp, setShowPopUp] = useState(true);

    const handleShowPopUP = () => {
        if (!showPopUp) {
            setCoordinatesPopUp(10)
        }

        setShowPopUp(!showPopUp)
    }

    return <ContactMapComponent
        isLoaded={isLoaded}
        containerStyle={containerStyle}
        center={center}
        handleShowPopUP={handleShowPopUP}
        showPopUp={showPopUp}
        coordinatesPopUp={coordinatesPopUp}
    />
}