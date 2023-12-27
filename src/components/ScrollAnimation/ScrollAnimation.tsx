'use client';
import { useEffect, useRef } from 'react';
import React from 'react'
import styles from "./scrollAnimation.module.css"
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimation = () => {
  const imgRef = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);
  const part4 = useRef(null);
  const part5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    const part2El = part2.current;
    const part3El = part3.current;
    const part4El = part4.current;
    const part5El = part5.current;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: part2El,
        scrub: true,
        start: "top 80%",
        end: "+=500px",
        markers: true
      },
    });
    tl.to(el, {
      // rotate: 180,
      y: "100vh",
      left: "0%"
    });




    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: part3El,
        scrub: true,
        start: "top 80%",
        end: "+=500px",
        markers: true
      },
    });
    tl2.to(el, {
      y: "210vh",
      left: "50%"
    });


    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: part4El,
        scrub: true,
        start: "top 80%",
        end: "+=500px",
        markers: true,
      },
    });
    tl3.to(el, {
      y: "300vh",
      left: "0%",
      pin: true
    });





    const pin = gsap.to(part5El, {
      scrollTrigger: {
        trigger: part5El,
        start: 'top 10%',
        // end: 'bottom 30%',
        end: '2500 70%',
        markers: true,
        pin: true,
        scrub: 1, 
      },
      // y: 0
    });
    return ()=>{
      pin.kill()
    }

  }, []);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <>
    <div className={styles.part1}>
      <div className={styles.title}>FANTA</div>
      <Image ref={imgRef} src="/fanta.png" className={styles.fantaImg} alt="img" height={500} width={650}/>
    </div>

    <div className={styles.part2} ref={part2}>
    <svg className={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF0066" d="M44.7,-31.6C56.8,-20.4,64.9,-1.9,61.5,14.5C58.1,30.8,43.3,45,25.6,53.7C8,62.4,-12.6,65.7,-27.1,58C-41.6,50.4,-49.9,31.8,-54.4,12.4C-58.9,-7.1,-59.4,-27.4,-49.7,-38.1C-39.9,-48.7,-20,-49.7,-1.9,-48.2C16.3,-46.7,32.5,-42.8,44.7,-31.6Z" transform="translate(100 100)" />
    </svg>
    <div className={styles.part2Right}>
      <h1>My Fanta</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
    </div>

    <div className={styles.part3} ref={part3}></div>

    <div className={styles.part4} ref={part4}>
      <div></div>
      <div className={styles.part4Right}>
      <h1>My Fanta 2</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
    </div>

    <div className={styles.part5}>
    <div className={styles.part5Left}></div>
      <Image style={{marginTop:"8rem"}} ref={part5} src="/fanta.png" className={styles.fantaImg} alt="img" height={500} width={650}/>
      <div className={styles.part5Text}>
        <p>My Name is Naiem Al Foysal.</p>
        <p>I am from Meherpur.</p>
        <p>I read in CUET.</p>
        <p>My Dept is ETE.</p>
        <p>I eat rice.</p>
        <p>Go to Dhaka.</p>
        <p>Lives in Chittagong.</p>
        <p>Are you okay?</p>
        <p>My Name is Naiem Al Foysal.</p>
        <p>I am from Meherpur.</p>
        <p>I read in CUET.</p>
        <p>My Dept is ETE.</p>
        <p>I am from Meherpur.</p>
        <p>I read in CUET.</p>
        <p>My Dept is ETE.</p>
        <p>I am from Meherpur.</p>
        <p>I read in CUET.</p>
        <p>My Dept is ETE.</p>
      </div>
    </div>

    <div className={styles.main} />
    </>
  )
}

export default ScrollAnimation
