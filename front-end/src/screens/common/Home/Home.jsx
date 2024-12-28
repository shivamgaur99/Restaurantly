import React from "react";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Events from "./components/Events";
import BookATable from "./components/BookATable";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Chefs from "./components/Chefs";
import Gallery from "./components/Gallery";

function Home() {
  return (
    <div>
      <HeroSection />
      <Menu />
      <Specials />
      <Events />
      <BookATable />
      <Testimonials />
      <Gallery />
    <Chefs />
    <Contact />
    </div>
  );
}

export default Home;
