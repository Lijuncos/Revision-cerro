import Image from "next/image"
import styles from "./OurVisionCardComponent.module.scss";

export default function OurVisionCardComponent({
    imgSrc,
    imgAlt,
    isReverse,
    description
}: {
    imgSrc: string,
    imgAlt: string,
    isReverse: boolean,
    description: any
}) {

    return (
        <div className={`${styles["container-card-timeline"]} ${!isReverse ? styles["reverseCard"] : ""}`}>
            <div className={styles["container-outer-timeline-image"]}>
                <div className={styles["container-inner-timeline-image"]}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                    />
                </div>
                <div className={`${styles["overlay-image"]} ${!isReverse ? styles["bg-reverse"] : ""}`} />
            </div>
            <div className={`${styles["container-timeline-description"]}`}>
                <div className={`${styles["timeline-description"]} ${!isReverse ? styles["isRight"] : ""}`}>
                    {
                        description && description.map((item: { text_id: number, text: string, bold: boolean }) => {
                            return (
                                <span className={`${styles["text-description"]} ${item.bold ? styles["isBold"] : ""}`}
                                    key={item.text_id}
                                >
                                    {item.text}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}