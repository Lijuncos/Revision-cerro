import Image from "next/image"
import styles from "./BannerBrandCardComponent.module.scss"
import { ImageInterface } from "@/types"

export default function BannerBrandCardComponent({ imgData }: { imgData: ImageInterface }) {

    return (
        <div className={styles["container-outer-brand"]}>
            <div className={styles["container-inner-brand"]}>
                <Image
                    src={imgData.imgSrc}
                    alt={imgData.imgAlt}
                    fill
                    priority
                />
            </div>
        </div>
    )
}