import styles from "./TitleSectionComponent.module.scss";


export default function TitleSectionComponent({titletext}:{titletext:string}) {
    return (
        <div className={styles["services-title"]}>
            <p className={styles["services-title-text"]}>{titletext}</p>
            <div className={styles["title-line"]}></div>
        </div>
    )
}

