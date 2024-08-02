import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"
import rightArrow from '../../../assets/right.svg';
import styles from './CarouselRightNavigation.module.css';


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd);
        })
    }, [swiper])
    return (
        <div className={styles.rightNavigation}>
            {
                <button disabled={!isEnd ? false : true} className={styles.btn} onClick={() => swiper.slideNext()}><img src={rightArrow} /></button>
            }
        </div>
    )
}

export default CarouselRightNavigation;