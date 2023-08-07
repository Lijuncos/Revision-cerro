import ContactMapContainer from "@/containers/ContactMapContainer/ContactMapContainer";
import styles from "./ContactComponent.module.scss";
import TitleSectionComponent from "../TitleSectionComponent/TitleSectionComponent";
import data from "@/modules/es.json";
import ContactFormContainer from "@/containers/ContactFormContainer/ContactFormContainer";
import ContactCountryCardComponent from "../ContactCountryCardComponent/ContactCountryCardComponent";
import { ContactCountryCard } from "@/types";

export default function ContactComponent() {
    return (
        <div id={data.contact.sectionLink} className={styles["container-section-contact"]}>
            <TitleSectionComponent titletext={data.contact.title} />
            <div className={styles["section-contact"]}>
                <ContactMapContainer />

                <div className={styles["body-contact"]}>
                    <div className={styles["container-country-cards"]}>
                        {
                            data && Object.values(data.contact.countryCards).map((card: ContactCountryCard) => {
                                return <ContactCountryCardComponent data={card} key={card.card_id} />
                            })
                        }
                    </div>
                    <ContactFormContainer />
                </div>
            </div>
        </div>
    )
}