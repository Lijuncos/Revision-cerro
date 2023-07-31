import { ImageInterface } from "@/types";
import styles from "./LogoComponent.module.scss";
import Image from "next/image";

export default function LogoComponent({ imgData }: { imgData: ImageInterface }) {

    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["contanier-inner-image"]}>
                <Image
                    src={imgData.imgSrc}
                    alt={imgData.imgAlt}
                    fill
                />
            </div>
        </div>
    )
}