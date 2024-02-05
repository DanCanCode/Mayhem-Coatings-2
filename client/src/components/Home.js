import React from "react";
import About from "./About";
import Services from "./Services";
import Location from "./Location";
import Gallery from "./Gallery";
import Contact from "./Contact";

const HomeVideo = () => {
  if (window.innerWidth >= 640) {
    return <video src='/videos/home-vid-16-9.mp4' className="h-full w-full object-cover fixed -z-10" autoPlay loop muted/>
  } else {
    return <video src='/videos/home-video-9-16.mp4' className="h-full w-full object-cover fixed -z-10" autoPlay loop muted/>
  }
}

const Home = () => {
  return (<main id='home'><div className="relative h-screen">
  <HomeVideo />
   <div className="bg-black/50 h-full w-full fixed -z-10"/> 
  <img src="/images/logo.png" className="animate-fadein absolute max-h-[500px] left-1/2 top-1/2 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center"/>
</div>

<About />
<hr className="solid"></hr>
<Services />
<hr className="solid"></hr>
<Location />
<hr className="solid"></hr>
<Gallery />
<hr className="solid"></hr>
<Contact />
</main>);
};

export default Home;
