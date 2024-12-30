import React from "react";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Events from "./components/Events";
import BookATable from "./components/BookATable";
import Testimonials from "./components/Testimonials";
import Chefs from "./components/Chefs";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";

function Home() {
  return (
    <div>
      <HeroSection />
      <Menu />
      <Specials />
      <Intro/>
      <Events />
      <BookATable />
      <Gallery />
        <Chefs /> 
      <Testimonials />
    </div>
  );
}

export default Home;
