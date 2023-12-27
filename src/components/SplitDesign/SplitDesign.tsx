'use client';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./myStyle.module.css"

const SplitDesign = () => {
    const triggerRef = useRef(null);

    const topRef = useRef(null);
    const centerRef = useRef(null);
    const bottomRef = useRef(null);

    const contentRef = useRef(null);

    const top_h1_Ref = useRef(null);
    const center_h1_Ref = useRef(null);
    const bottom_h1_Ref = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        var tl = gsap.timeline({scrollTrigger:{
            trigger: triggerRef.current,
            // markers:true,
            start:"50% 50%",
            end:"150% 50%",
            scrub:2,
            pin:true
        }});
        tl
        .to(centerRef.current,{
           height: "100vh",
        },'a')
        .to(topRef.current,{
            top: "-50%",
         },'a')
         .to(bottomRef.current,{
            bottom: "-50%",
         },'a')
        .to(top_h1_Ref.current,{
            bottom: "-50%"
         },'a')
         .to(bottom_h1_Ref.current,{
            bottom: "-30%"
         },'a')
        .to(center_h1_Ref.current,{
           top: "-30%"
        },'a')
        .to(contentRef.current,{
           delay: -0.2,
           marginTop: "0%"
        })

        return ()=>{
            tl.kill()
        }
    },[])
  return (
    <>
    <div ref={triggerRef} className={styles.main}>
        <div ref={topRef} className={styles.top}>
            <h1 ref={top_h1_Ref} className={`${styles.main_h1} ${styles.top_h1}`}>GRAVITY</h1>
        </div>
        <div ref={centerRef} className={styles.center}>
            <div ref={contentRef} className={styles.content}>
                <h4 className={styles.content_h4}>GRAVITY</h4>
                <h3 className={styles.content_h3}><i>Browse</i> the work that define a <i>movement</i> and created a craft.</h3>
                <div className={styles.btn}>
                    <h5>ENTER GALLERY</h5>
                </div>
                <h2 className={styles.content_h2}>(17)</h2>
            </div>
        </div>
        <div ref={bottomRef} className={styles.bottom}>
            <h1 ref={bottom_h1_Ref} className={`${styles.main_h1} ${styles.bottom_h1}`}>GRAVITY</h1>
        </div>
    </div>
    {/* <div style={{marginBottom:'100vh'}} /> */}
    </>
  )
}

export default SplitDesign