import styles from "./BannerComponent.module.scss"
import data from "@/modules/es.json"
import BannerBrandCardComponent from "../BannerBrandCardComponent/BannerBrandCardComponent"
import { BannerSliderInterface, BrandCardInterface } from "@/types"
import BannerCardComponent from "../BannerCardComponent/BannerCardComponent"

export default function BannerComponent({
    currentIndex,
    images
}: {
    currentIndex: number;
    images: any
}) {

    return (
        <div id={data.banner.sectionLink} className={styles["container-section-banner"]}>
            <div className={styles["container-slider"]}>
                {images.map((image: BannerSliderInterface, index: number) => {
                    return (
                        <BannerCardComponent
                            currentIndex={currentIndex}
                            index={index}
                            key={image.banner_id}
                            imgSrc={`${image.imgSrc}`}
                            imgAlt={`${image.imgAlt}`}
                        />
                    )
                })
                }
            </div>
            <div className={styles["container-cards-brands"]}>
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