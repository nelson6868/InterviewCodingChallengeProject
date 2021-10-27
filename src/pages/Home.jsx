import React from "react";
import Cards from "../components/Cards";
import Features from "../components/Features";
import Header from "../components/Header";
import Section from "../components/Section";
import Solutions from "../components/Solutions";
import Support from "../components/Support";
import Trial from "../components/Trial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Section />
      <Features />
      <Solutions />
      <Support />
      <Cards />
      <Trial />
      <Footer />
    </div>
  );
}
