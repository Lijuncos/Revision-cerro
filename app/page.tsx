import ServicesComponent from "@/components/ServicesComponent/ServicesComponent"
import OurVisionComponent from "@/components/OurVisionComponent/OurVisionComponent"
import ContactComponent from "@/components/ContactComponent/ContactComponent"
import styles from "./page.module.scss"
import BannerContainer from "@/containers/BannerContainer/BannerContainer"
import data from "@/modules/es.json"
import dotenv from "dotenv";
import Image from "next/image"
dotenv.config();

export default function Home() {
  return (
    <main  className={styles["container-section-main"]}>
      <section className={styles["container-wrapper"]}>
        <BannerContainer />
        <ServicesComponent />
        <OurVisionComponent />
        <ContactComponent />
      </section>

    </main>
  )
}
