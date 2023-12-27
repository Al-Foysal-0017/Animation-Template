"use client"
import React, { useEffect, useRef } from 'react';
import styles from "./textSplitAnimation.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextSplitAnimation = () => {
    const triggerRef = useRef(null);
    const topRef = useRef(null);
    const canterRef = useRef(null);
    const bottomRef = useRef(null);
    const contentRef = useRef(null);

    const topTxtRef = useRef(null);
    const bottomTxtRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger: triggerRef.current,
            markers: true,
            start: "50% 50%",
            end: "100% 50%",
            scrub: 2,
            pin: true
        }});

        tl
        .to(canterRef.current,{
            height: "100vh",
         },'textSplit')
        .to(topRef.current, {
            top: "-50%",
            height: 0,
        }, "textSplit")
        .to(bottomRef.current, {
            bottom: "-50%",
            height: 0,
        }, "textSplit")
        .to("#center-h1",{
            top: "-30%"
         },'a')
         .to(contentRef.current,{
            delay: -0.2,
            marginTop: "0%"
         })
        // .to(topTxtRef.current, {
        //     top: "0%",
        // }, "textSplit")
        // .to(bottomTxtRef.current, {
        //     top: "-100%",
        // }, "textSplit")

        return ()=>{
            tl.kill()
        }
    },[])
  return (
    <>
    <div className={styles.mainP}>HEADER</div>

    <div ref={triggerRef} className={styles.main}>
        <div ref={topRef} className={styles.top}>
            <h1 ref={topTxtRef} className={styles.topText1}>GALLERY</h1>
        </div>
        <div ref={canterRef} className={styles.center}>
            <div ref={contentRef} className={styles.content}>
                <h4 className={styles.contenth4}>GRAVITY</h4>
                <h3 className={styles.contenth3}><i>Browse</i> the work that define a <i>movement</i> and created a craft.</h3>
                <div className={styles.btn}>
                    <h5>ENTER GALLERY</h5>
                </div>
                <h2 className={styles.contenth2}>(17)</h2>
            </div>
        </div>
        <div ref={bottomRef} className={styles.bottom}>
            <h1 ref={bottomTxtRef} className={styles.topText2}>GALLERY</h1>
        </div>
    </div>

    <div className={styles.mainP}>FOOTER</div>
    </>
  )
}

export default TextSplitAnimation