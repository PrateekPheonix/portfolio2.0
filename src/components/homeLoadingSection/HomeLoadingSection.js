import React, {useEffect,useRef} from 'react'
import { gsap, Power1,Power3} from "gsap";
import './HomeLoadingSection.css'

const HomeLoadingSection = () => {
    const boxRef = useRef();
    const tl = useRef();
    const q = gsap.utils.selector(boxRef);
    useEffect(() => {
    // gsap.to(boxRef.current, {opacity:1, scaleX:1, scaleY:1, width:300, height:250, transformOrigin:"center", marginTop:0, duration:2, ease:Power1.easeIn});
    tl.current = gsap.timeline()
        .to(boxRef.current, {opacity:1, scale:10, duration:2, transformOrigin:"50% 50%", ease:Power1.easeIn})
        // .to(boxRef.current, {x:"+=20", yoyo:true, repeat:7, duration:0.1})
        // .to(boxRef.current, {x:"-=20", yoyo:true, repeat:7, duration:0.1})
        // .to(q(".svgAni"), { x: "random(-450,450)", y: "random(-315,315)", duration:0.5, ease:Power3.Out })
        // .to(q(".svgAni"), {y:"random(410,420)",duration: 1});
        /*============================================================
                                Animation of exploding 
        ==============================================================*/
        .to(q(".svg1"), { 
            x:450, 
            y: -320, 
            rotate:70, 
            duration:0.5,
            ease:Power3.Out 
        },">+0.5")
        .to(q(".svg2"), {x:150,
            y: 80, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg3"), {x:-320,
            y: -50, 
            rotate:45, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg4"), { 
            x:-620, 
            y: -150, 
            rotate:125, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg5"), {
            x:-80, 
            y:160, 
            rotate:25, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg6"), { 
            x:80, 
            y:260, 
            rotate:20, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg7"), { 
            x:100, 
            y:180, 
            rotate:20, 
            duration:0.5, 
            ease:Power3.Out
        },">-0.5")
        .to(q(".svg8"), {
            x:380, 
            y:180, 
            rotate:10, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg9"), { 
            x:-280, 
            y:60, 
            rotate:110, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg10"), { 
            x:-40, 
            y:540, 
            rotate:130, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg11"), { 
            x:120, 
            y:-140, 
            rotate:5, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        /*===================================================================
                            Animation of falling down
        =====================================================================*/
        .to(q(".svg1"), {
            y:420, 
            rotate:30, 
            duration:1.25,
            opacity:0, 
            ease:Power3.Out 
        },">")
        .to(q(".svg9"), {
            y:360, 
            rotate:140, 
            duration:1.25,
            opacity:0, 
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg4"), {
            y:630, 
            rotate:125, 
            duration:1.25,
            opacity:0, 
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg6"), {
            x:-360,
            y:620, 
            rotate:20, 
            duration:1.25
            ,opacity:0, 
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg2"), {
            x:-170,
            y: 560, 
            duration:1.25,
            opacity:0, 
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg8"), {
            y:280, 
            rotate:10, 
            duration:1.25,
            opacity:0, 
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg11"), {
            x:80, 
            y:600, 
            rotate:5, 
            duration:1.25,
            opacity:0,
            ease:Power3.Out 
        },">-1.25")
        /*==========================================================================
                                Animation of going up
        ============================================================================*/
        .to(q(".svg7"), {
            x:350, 
            y:400, 
            rotate:60, 
            duration:0.75,
            opacity:0.75,
            ease:Power3.Out 
        },">-1.25")
        .to(q(".svg10"), {
            x:400 , 
            y:-160,scale:0.75,
            opacity:0.75, 
            rotate:130, 
            duration:0.5, 
            ease:Power3.Out 
        },">-1.25")   
        .to(q(".svg5"), {
            x:140, 
            y:120, 
            scale:1.25,
            opacity:0.75, 
            rotate:65,
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5")
        .to(q(".svg3"), { 
            x:540 , 
            y:100,
            scale:1.3,
            opacity:0.75, 
            rotate:25, 
            duration:0.5, 
            ease:Power3.Out 
        },">-0.5") 
    });
    return (
    <div className='svg'>
        <svg ref={boxRef} width="1440" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='svg1 svgAni' d="M721.781 447.776L791.828 488.512L721.526 528.807L721.781 447.776Z" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg2 svgAni' d="M717.911 441.423L647.253 400.773L717.433 360.537L717.911 441.423Z" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg3 svgAni' d="M793.609 485.151L723.537 444.455L793.816 404.12L793.609 485.151Z" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg4 svgAni' d="M721.417 360.55L791.64 400.779L721.524 441.38L721.417 360.55Z" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg5 svgAni' d="M645.771 403.982L718.734 444.383V614.412L647.241 573.563L645.771 403.982Z" stroke="#01F9C6" stroke-width="5"/>
            <path className='svg6 svgAni' d="M720 278L897 380" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg7 svgAni' d="M896 378V584" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg8 svgAni' d="M897 582L720 685.5" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg9 svgAni' d="M722 685L544 583" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg10 svgAni' d="M544.5 584.5L544.5 379" stroke="#01F9C6" stroke-width="4"/>
            <path className='svg11 svgAni' d="M543 381L722 278" stroke="#01F9C6" stroke-width="4"/>
        </svg>
    </div>
    )
}

export default HomeLoadingSection
