import React from "react";

// components
import { Navbar, Footer } from "./components";

// pages
import { Home, Sponsors, HowItWorks, About, Pricing, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sponsors />
      <HowItWorks />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
