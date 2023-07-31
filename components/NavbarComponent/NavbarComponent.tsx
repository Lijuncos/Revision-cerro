import Image from "next/image"
import styles from "./NavbarComponent.module.scss"
import data from "@/modules/es.json"
import LogoComponent from "../LogoComponent/LogoComponent"
import { UseScrollPosition } from "@/utils/scroll/useScrollPosition"
import useOutsideClick from "@/utils/outSideRef/useOutSideClick"

interface Props {
    text_id: string,
    title: string,
    link: string
}

export default function NavbarComponent({
    isMenu,
    activeItemId,
    handleClickTitleNavigation,
    handleShowMenu
}: {
    isMenu: boolean,
    activeItemId: string,
    handleClickTitleNavigation: (textItem: string) => void,
    handleShowMenu: () => void
}) {

    const scroll = UseScrollPosition()

    const menuRef = useOutsideClick(() => {
        if (isMenu) {
            handleShowMenu();
        }
    });

    return (
        <section className={`
        ${styles["container-section-navbar"]} 
        ${scroll > 50 ? styles["blur-background"] : ""}`}>
            <div className={styles["container-headers"]}>
                <LogoComponent imgData={data.navbar.logo} />
                <div className={styles["container-section-menu-desktop"]}>
                    {
                        Object.values(data.navbar.navigtaion).map((textItem: Props) => {
                            const isActive = activeItemId === textItem.text_id;
                            
                            return (
                                <a href={textItem.link} key={textItem.text_id} className={styles["text-item"]}>
                                    <div
                                        id={textItem.text_id}
                                        className={`${isActive ? styles["circle-item-active"] : styles["circle-item"]}`}
                                    />
                                    <p
                                        className={`${styles["title-navigation"]} ${isActive ? styles["active-text"] : ""}`}
                                        onClick={() => { handleClickTitleNavigation(textItem.text_id); }}
                                    >
                                        {textItem.title}
                                    </p>
                                </a>
                            )
                        })
                    }
                </div>
                <div className={styles["container-section-menu-mobile"]}>
                    <div className={styles["container-outer-menu-mobile"]} onClick={handleShowMenu}>
                        <div className={styles["contanier-inner-menu-mobile"]}>
                            <Image
                                src={data.navbar.burgerMenuIcon.imgSrc}
                                alt={data.navbar.burgerMenuIcon.imgAlt}
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                isMenu && <div className={styles["mobile-overlay"]}>
                    <div className={styles["container-show-menu"]} ref={menuRef}>
                        <button
                            className={styles["button-mobile-menu"]}
                            onClick={handleShowMenu}>X</button>
                        {
                            Object.values(data.navbar.navigtaion).map((textItem: Props) => {
                                return (
                                    <a href={textItem.link} key={textItem.text_id}>
                                        <p className={`${styles["title-navigation"]}`}>
                                            {textItem.title}
                                        </p>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </section>
    )
}