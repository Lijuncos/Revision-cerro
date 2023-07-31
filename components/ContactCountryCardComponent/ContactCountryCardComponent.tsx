import Image from "next/image"
import styles from "./ContactCountryCardComponent.module.scss"
import { ContactCountryCard } from "@/types"

export default function ContactCountryCardComponent({
    data
}: {
    data: ContactCountryCard
}) {
    return (
        <a className={`${styles["containter-section-country-card"]} ${data.isActive ? styles["bg-active"] : ""}`} href={`tel:${data.phone.number}`}>
            <div className={styles["country-card-header"]}>
                <div className={styles["container-outer-country-image"]}>
                    <div className={styles["container-inner-country-image"]}>
                        <Image
                            src={data.image.imgSrc}
                            alt={data.image.imgAlt}
                            fill
                        />
                    </div>
                </div>
                <p className={styles["country-title-header"]}>{data.title}</p>
            </div>
            <div className={styles["country-card-description"]}>
                <div className={styles["section-location"]}>
                    <div className={styles["container-outer-country-icon-location"]}>
                        <div className={styles["container-inner-country-icon-location"]}>
                            <Image
                                src={data.address.icon.iconSrc}
                                alt={data.address.icon.iconAlt}
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles["info-card"]}>
                        <p className={styles["card-text"]}>{data.address.direction.title}</p>
                        <p className={styles["card-text"]}>{data.address.direction.description}</p>
                        <p className={styles["card-text-bold"]}>{data.address.direction.location}</p>
                    </div>
                </div>
                <div className={styles["container-section-phone"]}>
                    <div className={styles["section-phone"]}>
                        <div className={styles["container-outer-country-icon-phone"]}>
                            <div className={styles["container-inner-country-icon-phone"]}>
                                <Image
                                    src={data.phone.icon.iconSrc}
                                    alt={data.phone.icon.iconAlt}
                                    fill
                                />
                            </div>
                        </div>
                        <p className={styles["card-text"]}>{data.phone.number}</p>
                    </div>
                    {
                        data.phone.secondNumber && (
                            <div className={styles["section-phone"]}>
                                <div className={styles["container-outer-country-icon-phone"]}>
                                    <div className={styles["container-inner-country-icon-phone"]}>
                                        <Image
                                            src={data.phone.icon.iconSrc}
                                            alt={data.phone.icon.iconAlt}
                                            fill
                                        />
                                    </div>
                                </div>
                                <p className={styles["card-text"]}>{data.phone.secondNumber}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </a>
    )
}