import "./intro.scss";
 import { init } from 'ityped';
import { useEffect, useRef } from "react";
 

const Intro = () => {

const textRef =  useRef();

  useEffect(()=>{
     init(textRef.current, { 
        showCursor: true,
        backDelay:1500,
        backSpeed:60,
        strings: ['Developer' ],
     });

  }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/avataaars.svg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Kevin Baluba</h1>
                    <h3> Front-end Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow-5-512.png" alt="" />
                </a>
            </div>

        </div>
    )
}

export default Intro