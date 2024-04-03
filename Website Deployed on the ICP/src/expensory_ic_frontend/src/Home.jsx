import React, { useState, useEffect } from "react";
import "./Home.css";
import HomeComponent from "./home/Components/Home";
import About from "./home/Components/About";
import Team from "./home/Components/Team";
import Testimonial from "./home/Components/Testimonial";
import Contact from "./home/Components/Contact";
import Footer from "./home/Components/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="preloader">
            <div class="loader loader-inner-1">
                <div class="loader loader-inner-2">
                    <div class="loader loader-inner-3">
                    </div>
                </div>
            </div>
        </div>
      ) : (
        <div className="App">
          <HomeComponent />
          <About />
          <Team />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;