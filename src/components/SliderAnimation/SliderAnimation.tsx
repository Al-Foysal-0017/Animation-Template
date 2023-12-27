"use client"
import React, { useEffect, useRef } from 'react'
import styles from "./sliderAnimation.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SliderAnimation = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 10,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        return ()=>{
            pin.kill()
        }
    },[])

  return (
    <>
    <div className={styles.main1}>
        HEADER
    </div>

    <div ref={triggerRef} className={styles.scrollSectionOuter}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
            <div className={`${styles.scrollSection} ${styles.scroll1}`}>
                <h1>Section 111</h1>
            </div>
            <div className={`${styles.scrollSection} ${styles.scroll2}`}>
                <h1>Section 222</h1>
            </div>
            <div className={`${styles.scrollSection} ${styles.scroll3}`}>
                <h1>Section 333</h1>
            </div>
            <div className={`${styles.scrollSection} ${styles.scroll4}`}>
                <h1>Section 444</h1>
            </div>
        </div>
    </div>

    <div className={styles.main3}>
        FOOTER
    </div>
    </>
  )
}

export default SliderAnimation