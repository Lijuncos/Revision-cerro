import styles from "./ContactMapComponent.module.scss";
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import data from "@/modules/es.json";

interface Props {
    isLoaded: boolean,
    containerStyle: {
        width: string,
        height: string,
        borderRadius: string
    },
    center: {
        lat: number,
        lng: number
    },
    handleShowPopUP: () => void,
    showPopUp: boolean,
    coordinatesPopUp: number
}

export default function ContactMapComponent({
    isLoaded,
    containerStyle,
    center,
    handleShowPopUP,
    showPopUp,
    coordinatesPopUp
}: Props) {

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
        >
            <Marker position={center} onClick={handleShowPopUP}>
                {showPopUp &&
                    <InfoWindow position={center} options={{ pixelOffset: new google.maps.Size(0, coordinatesPopUp) }}>
                        <div className={styles["marker-label"]}>
                            <p className={styles["mapPopupTitle"]}>{data.contact.map.popUp.title}</p>
                            <p>{data.contact.map.popUp.subtitle}</p>
                            <a className={styles["mapPopupLink"]} href={data.contact.map.popUp.link} target="_blank">
                                {data.contact.map.popUp.linkTitle}
                            </a>
                        </div>
                    </InfoWindow>
                }
            </Marker>
        </GoogleMap>
    ) : <></>
}

