import Image from "next/image"
import styles from "./BannerCardComponent.module.scss"

export default function BannerCardComponent({
    imgSrc,
    imgAlt,
}: {
    imgSrc: string,
    imgAlt: string,
}) {

    return (
        <div className={styles["container-outer-banner"]}>
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