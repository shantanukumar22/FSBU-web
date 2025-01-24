import React from "react";
import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import Pricing from "../sections/Pricing.jsx";
import Faq from "../sections/Faq.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Footer from "../sections/Footer.jsx";
import "../index.css";
import InfiniteHorizontalScroll from "../sections/SocialMedia.jsx";
import SocialCardCarousel from "../sections/SocialMedia.jsx";
import InfiniteMovingCards from "../sections/SocialMedia.jsx";
// import HorizontalScroll from "../sections/SocialMedia.jsx";
function Home() {
  return (
    <div>
      <main className="overflow-hidden g7">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        {/* <InfiniteHorizontalScroll /> */}
        <InfiniteMovingCards />
        {/* <Faq /> */}
        <Testimonials />
        {/* <Download /> */}
        <Footer />
      </main>
    </div>
  );
}

export default Home;
