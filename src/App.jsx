import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonial/>
      <Contact/>

     </div>
    </div>
  );
}

export default App;
