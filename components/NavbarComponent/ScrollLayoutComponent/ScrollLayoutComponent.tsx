'use client'

import { UseScrollPosition } from "@/utils/scroll/useScrollPosition"
import styles from "./ScrollLayoutComponent.module.scss"

export default function ScrollLayoutComponent({ children }: { children: React.ReactNode }) {
    const scroll = UseScrollPosition()
    return (
        <section className={`${styles["container-section-navbar"]} ${scroll > 50 ? styles["blur-background"] : ""}`}>
            {children}
        </section>
    )
}