import Image from "next/image";
import styles from "./OurVisionComponent.module.scss";
import data from "@/modules/es.json"
import { ImageInterface } from "@/types";
import OurVisionCardComponent from "../OurVisionCardComponent/OurVisionCardComponent";
import TitleSectionComponent from "../TitleSectionComponent/TitleSectionComponent";

interface Props {
    info_id: number,
    image: ImageInterface,
    description: { text_id: number, text: string, bold: boolean }[],
    rowStyle: boolean
}

export default function OurVisionComponent() {

    return (
        <div id={data.vision.titleLink} className={styles["container-section-ourvision"]}>
            <TitleSectionComponent titletext={data.vision.title}/>
            <div className={styles["container-section-timeline"]}>
                <div className={styles["header-timeline"]}>
                    <p className={styles["header-year-text"]}>{data.vision.timeline.header.year}</p>
                    <div className={styles["container-outer-timeline-icon"]}>
                        <div className={styles["container-inner-timeline-icon"]}>
                            <Image
                                src={data.vision.timeline.icon.imgSrc}
                                alt={data.vision.timeline.icon.imgAlt}
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className={styles["body-timeline"]}>
                    {
                        data.vision.timeline.info.map((section: Props) => {
                            return <OurVisionCardComponent
                                imgSrc={section.image.imgSrc}
                                imgAlt={section.image.imgAlt}
                                isReverse={section.rowStyle}
                                description={section.description}
                                key={section.info_id}
                            />
                        })
                    }
                    <div className={styles["body-timeline-overlay"]}>
                        <div className={styles["line-divisor"]}>
                            <div className={styles["line-breakpoint"]} />
                            <div className={styles["line-breakpoint"]} />
                            <div className={styles["line-breakpoint"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["footer-timeline"]}>
                    <div className={styles["footer-year"]}>
                        <div className={styles["container-outer-timeline-icon"]}>
                            <div className={styles["container-inner-timeline-icon"]}>
                                <Image
                                    src={data.vision.timeline.icon.imgSrc}
                                    alt={data.vision.timeline.icon.imgAlt}
                                    fill
                                />
                            </div>
                        </div>
                        <p className={styles["footer-year-text"]}>{data.vision.timeline.footer.year}</p>
                    </div>
                    <div className={`${styles["container-footer-description"]}`}>
                        {
                            data.vision.timeline.footer.description.map((item: { text_id: number, text: string, bold: boolean }) => {
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
        </div >
    )
}