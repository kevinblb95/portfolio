import "./works.scss"
import {  useState} from 'react';

const Works = () => {
    const [currentSlide, setcurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "assets/mobile1.png",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
            title: "web Design",
            desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ratione deserunt perferendis reiciendis rem adipisci dicta at corporis consequatur. "
        },
        {
            id: 2,
            icon: "assets/globe.png",
            img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
            title: "Mobile Application",
            desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ratione deserunt perferendis reiciendis rem adipisci dicta at corporis consequatur. "
        },
        {
            id: 3,
            icon: "assets/twitter.png",
            img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
            title: "Branding",
            desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ratione deserunt perferendis reiciendis rem adipisci dicta at corporis consequatur. "
        },

    ];

    const handleClick = (way)=>{
        way === "left" ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
        setcurrentSlide( currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    




    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
                {data.map(d => (

                     <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                       {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right ">
                                <img src={d.img} />

                            </div>

                        </div>

                    </div>
                ))}
            </div>
            <img src="assets/white-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/white-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />

        </div>
    )
}

export default Works