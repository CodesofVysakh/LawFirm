import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"
import leftArrow from '../../../assets/left.svg';
import styles from './CarouselLeftNavigation.module.css';


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning);
        })
    }, [swiper])

    return (
        <div className={styles.leftNavigation}>
            {
                <button disabled={!isBeginning ? false : true} className={styles.btn} onClick={() => swiper.slidePrev()}><img src={leftArrow} /></button>
            }
        </div>
    )
}

export default CarouselLeftNavigation