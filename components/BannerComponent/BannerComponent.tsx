import styles from "./BannerComponent.module.scss"
import data from "@/modules/es.json"
import BannerBrandCardComponent from "../BannerBrandCardComponent/BannerBrandCardComponent"
import { BannerSliderInterface, BrandCardInterface } from "@/types"
import BannerCardComponent from "../BannerCardComponent/BannerCardComponent"

export default function BannerComponent({
    currentIndex,
}: {
    currentIndex: number;
}) {

    return (
        <div className={styles["container-section-banner"]}>
            <div className={styles["container-slider"]}>
                {
                    data.banner.images.map((slide: BannerSliderInterface, index: number) => (
                        <div
                            key={slide.banner_id}
                            className={`${styles["slide-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                            <BannerCardComponent
                                imgSrc={`${slide.imgSrc}`}
                                imgAlt={`${slide.imgAlt}`}
                            />
                        </div>
                    ))
                }
            </div>
            <div  className={styles["container-cards-brands"]}>
                <p className={styles["title-brands"]}>{data.banner.card.title}</p>
                <div className={styles["container-cards"]}>
                    {
                        data && data.banner.card.brands.map((brand: BrandCardInterface) => {
                            return <BannerBrandCardComponent imgData={brand} key={brand.brand_id} />
                        })
                    }
                </div>
            </div>
            <style jsx>{`
                .${styles["container-section-banner"]} .${styles["container-slider"]} {
                    transform: translateX(-${currentIndex * 33.333333}%);
                }
            `}</style>
        </div>
    )
}