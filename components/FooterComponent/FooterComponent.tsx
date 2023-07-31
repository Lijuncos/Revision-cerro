import Image from "next/image";
import styles from "./FooterComponent.module.scss";
import data from "@/modules/es.json";
import Link from "next/link";
import LogoComponent from "../LogoComponent/LogoComponent";
import { IconFooterInterface } from "@/types";

export default function FooterComponent() {
    return (
        <section className={styles["container-section-footer"]}>
            <div className={styles["primary-section"]}>
                <LogoComponent imgData={data.footer.logo} />
                <div className={styles["container-networks"]}>
                    {
                        data.footer.networks.map((iconItem: IconFooterInterface) => {
                            if (iconItem.icon_id === 1) {
                                return (
                                    <Link href={iconItem.link} className={styles["container-outer-other-icon"]} key={iconItem.icon_id}>
                                        <div className={styles["container-inner-other-icon"]} key={iconItem.icon_id}>
                                            <Image
                                                src={iconItem.imgSrc}
                                                alt={iconItem.imgAlt}
                                                fill
                                            />
                                        </div>
                                    </Link>
                                )
                            } else {
                                return (
                                    <Link href={iconItem.link} className={styles["container-outer-icon"]} key={iconItem.icon_id}>
                                        <div className={styles["container-inner-icon"]} key={iconItem.icon_id}>
                                            <Image
                                                src={iconItem.imgSrc}
                                                alt={iconItem.imgAlt}
                                                fill
                                            />
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className={styles["secondary-section"]}>
                <p className={styles["copyright-text"]}>{data.footer.copyright}</p>
            </div>
        </section>
    )
}