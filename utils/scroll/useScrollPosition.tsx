"use client"
import { useState, useEffect } from 'react';

export const UseScrollPosition = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    const handleScroll = (): void => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
};

// 'use client'
// import { useEffect, useState } from "react";

// export default function useBulletPoints(): string {
//     const [activeLink, setActiveLink] = useState<string>('');

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');

//             sections.forEach((sec) => {
//                 const top = window.scrollY;
//                 const offset = sec.offsetTop;
//                 const height = sec.offsetHeight;
//                 const id = sec.getAttribute('id');

//                 if (top >= offset && top < offset + height) {
//                     setActiveLink(id || '');
//                 }
//             });
//         };

//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', handleScroll);

//             return () => {
//                 window.removeEventListener('scroll', handleScroll);
//             };
//         }
//     }, []);

//     return activeLink;
// }