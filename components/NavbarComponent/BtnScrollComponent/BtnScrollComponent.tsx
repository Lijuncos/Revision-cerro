import { useEffect, useState } from 'react';
import { handleScrollToSection } from '@/utils/scroll/useScrollToSection';
import styles from './BtnScrollComponent.module.scss';

interface BtnScrollComponentProps {
    text_id: string;
    title: string;
    scrollTo: string;
    isActive: boolean;
    handleClickTitleNavigation: (textItem: string) => void;
}

export default function BtnScrollComponent({
    text_id,
    title,
    scrollTo,
    handleClickTitleNavigation,
}: BtnScrollComponentProps) {
    const [isActive, setIsActive] = useState(false);

    const handleSetActive = () => {
        const sectionElement = document.getElementById(scrollTo);
        if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            setIsActive(rect.top < window.innerHeight / 100 && rect.bottom > 1);
        }
    };

    useEffect(() => {
        // Detectar la sección activa al cargar la página
        handleSetActive();

        // Agregar el listener para detectar cambios de sección al hacer scroll
        window.addEventListener('scroll', handleSetActive);
        return () => {
            window.removeEventListener('scroll', handleSetActive);
        };
    }, [scrollTo]);

    return (
        <button
            onClick={() => handleScrollToSection(scrollTo)}
            className={styles['text-item']}
        >
            <div
                id={text_id}
                className={`${isActive ? styles['circle-item-active'] : styles['circle-item']}`}
            />
            <p
                className={`${styles['title-navigation']} ${isActive ? styles['active-text'] : ''}`}
                onClick={() => {
                    handleClickTitleNavigation(text_id);
                }}
            >
                {title}
            </p>
        </button>
    );
}