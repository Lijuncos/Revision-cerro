export interface ImageInterface {
    imgSrc: string,
    imgAlt: string,
    proportionX: number,
    proportionY: number,
    originalWidth?: string,
    originalHeight?: string
}

export interface IconFooterInterface extends ImageInterface {
    icon_id: number,
    link: string,
}

export interface BrandCardInterface extends ImageInterface {
    brand_id: number,
}

export interface BannerSliderInterface extends ImageInterface {
    banner_id: number,
}

export interface ContactCountryCard {
    card_id: number,
    image: ImageInterface,
    title: string,
    address: AddressData,
    phone: PhoneData
}
interface AddressData {
    icon: IconData,
    direction: {
        title: string,
        description: string,
        location: string
    }
}

interface IconData {
    iconSrc: string,
    iconAlt: string
}

interface PhoneData {
    icon: IconData,
    number: string
    secondNumber?: string
}