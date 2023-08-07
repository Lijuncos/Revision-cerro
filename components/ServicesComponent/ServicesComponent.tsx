import { ServicesCardComponent } from "../ServicesCardComponent/ServicesCardComponent";
import TitleSectionComponent from "../TitleSectionComponent/TitleSectionComponent";
import styles from "./ServicesComponent.module.scss";
import data from "@/modules/es.json";
import React from 'react';

export default function ServicesComponent() {
    return (
        <section id={data.services.sectionLink} className={styles["services-container"]}>
            <TitleSectionComponent titletext={data.services.title} />

            <div className={styles["services-cards"]}>
                <ServicesCardComponent />
            </div>
        </section>
    )
}