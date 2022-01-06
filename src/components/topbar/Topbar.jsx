import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={"topbar " + (menuOpen && "active" )} id="topbar">
            <div className="wrapper">
                <div className="left">
                   <a href="#intro" className="logo">genius.</a>
                   <div className="itemsContainer">
                    <span>+32 4 78 10 44 06</span>
                   </div>
                   <div className="itemsContainer">
                    <span>kevin.baluba@hotmail.com</span>
                   </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3  "></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar