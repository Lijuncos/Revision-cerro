'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { useState } from "react";
import data from "@/modules/es.json"
import useOutsideClick from "@/utils/outSideRef/useOutSideClick";

export default function NavbarContainer() {
    const [activeItemId, setActiveItemId] = useState<string>(Object.values(data.navbar.navigation)[0].text_id);
    const [isMenu, setIsMenu] = useState<boolean>(false);

    const handleClickTitleNavigation = (text_id: string) => {
        setActiveItemId(text_id);
    }

    const handleShowMenu = () => {
        setIsMenu(!isMenu);
    }

    const menuRef = useOutsideClick(() => {
        if (isMenu) {
            handleShowMenu();
        }
    });

    return <NavbarComponent
        isMenu={isMenu}
        activeItemId={activeItemId}
        handleClickTitleNavigation={handleClickTitleNavigation}
        handleShowMenu={handleShowMenu}
        menuRef={menuRef}
    />
}