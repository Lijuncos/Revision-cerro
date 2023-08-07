import Image from "next/image"
import styles from "./BannerCardComponent.module.scss"

export default function BannerCardComponent({
    imgSrc,
    imgAlt,
    index,
    currentIndex
}: {
    imgSrc: string,
    imgAlt: string,
    index: number,
    currentIndex: number
}) {

    return (
        <div className={`${styles["container-outer-banner"]} ${index === currentIndex ? styles["active"] : ""}`}>
            <div className={styles["container-inner-banner"]}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}