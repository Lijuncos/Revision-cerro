import Image from "next/image";
import styles from "./ServicesCardComponent.module.scss";
import data from "@/modules/es.json";

interface Props {
    id: number,
    icon: {
        iconSrc: string,
        iconAlt: string,
    },
    title: string,
    description: string
}

export const ServicesCardComponent = () => {

    return (
        <>{
            data.services.cards.map((card: Props) => {
                return (
                    <div key={card.id} className={styles["services-cards-container"]}>
                        <div>
                            <Image
                                src={card.icon.iconSrc}
                                alt={card.icon.iconAlt}
                                width={80}
                                height={80}
                            />
                        </div>
                        <p className={styles["services-cards-title"]} key={card.title}>{card.title}</p>
                        <p className={styles["services-cards-description"]} key={card.description}>{card.description}</p>
                        
                    </div>
                )
            })
        }</>
    )
};

