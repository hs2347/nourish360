import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
   
  const headingRef1= useRef();
  const headingRef2= useRef();
useGSAP(()=>{
    const heading1 = headingRef1.current;
gsap.from(heading1, {
    y:100,
    opacity:0,
    delay:0.1,
    duration:0.5,
    ease: "power1.out"
    }
    )   
})
useGSAP(()=>{
    const heading2 = headingRef2.current;
    gsap.from(heading2, {
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.5,
        ease: "power1.out"
        }
        )   
    })
  return (
        <div id='page1' className=' w-[100%] py-0 mx-8 text-[#ff7e7e] overflow-hidden'>
          <h1 ref={headingRef1} className='font-extrabold text-[12.8vw] md:text-[14.5vw] leading-[14vw] md:tracking-[-0.3rem] overflow-hidden'>JOIN THE </h1>
          <h1 ref={headingRef2} className='font-extrabold text-[12.8vw] md:text-[14.5vw] leading-[14vw] md:tracking-[-0.3rem] overflow-hidden'>COMMUNITY</h1>
          </div>
  );
}

export default Hero