'use client'
import BannerComponent from "@/components/BannerComponent/BannerComponent";
import data from "@/modules/es.json"
import { useEffect, useRef, useState } from "react";

export default function BannerContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const numSlides = data.banner.images && data.banner.images.length;
    const timeInterval = 3500;
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (numSlides !== undefined && numSlides > 0) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % numSlides);
            }, timeInterval);
        }

        return () => clearInterval(timerRef.current);
    }, [currentIndex, numSlides]);

    return <BannerComponent
        currentIndex={currentIndex}
        images={data.banner.images}
    />
}