import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './NavbarComponent.module.scss';
import data from '@/modules/es.json';
import LogoComponent from '../LogoComponent/LogoComponent';
import BtnScrollComponent from './BtnScrollComponent/BtnScrollComponent';
import ScrollLayoutComponent from './ScrollLayoutComponent/ScrollLayoutComponent';
import { HeadersData } from '@/types';

interface Props {
    isMenu: boolean;
    handleClickTitleNavigation: (textItem: string) => void;
    handleShowMenu: () => void;
    menuRef: React.RefObject<HTMLDivElement>;
}

export default function NavbarComponent({
    isMenu,
    handleClickTitleNavigation,
    handleShowMenu,
    menuRef,
}: Props) {
    const [activeItem, setActiveItem] = useState<string>('');

    // // Detectar la sección activa al cargar la página
    // useEffect(() => {
    //     const detectActiveSectionOnLoad = () => {
    //         const sectionIds = Object.values(data.navbar.navigation).map((textItem: HeadersData) => textItem.link);
    //         let activeSection = sectionIds[0]; // Default to the first section

    //         for (const sectionId of sectionIds) {
    //             const sectionElement = document.getElementById(sectionId);
    //             if (sectionElement) {
    //                 const rect = sectionElement.getBoundingClientRect();
    //                 if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
    //                     activeSection = sectionId;
    //                     break;
    //                 }
    //             }
    //         }

    //         return activeSection;
    //     };

    //     setActiveItem(detectActiveSectionOnLoad());
    // }, []);

    return (
        <ScrollLayoutComponent>
            <div className={styles['container-headers']}>
                <LogoComponent imgData={data.navbar.logo} />
                <div className={styles['container-section-menu-desktop']}>
                    {Object.values(data.navbar.navigation).map((textItem: HeadersData) => (
                        <BtnScrollComponent
                            key={textItem.text_id}
                            isActive={activeItem === textItem.link}
                            text_id={textItem.text_id}
                            title={textItem.title}
                            scrollTo={textItem.link}
                            handleClickTitleNavigation={(textId) => {
                            setActiveItem(textId);
                            handleClickTitleNavigation(textId);
                            }}
                        />
                    ))}
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
                            onClick={handleShowMenu}>x</button>
                        {
                            Object.values(data.navbar.navigation).map((textItem: HeadersData) => {
                                return (
                                    <a href={textItem.link} key={textItem.text_id}>
                                        <p onClick={handleShowMenu} className={`${styles["title-navigation"]}`}>
                                            {textItem.title}
                                        </p>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </ScrollLayoutComponent>
    )
}