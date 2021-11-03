import React from "react";
import Scuad from "../components/Scuad/Scuad";
import Features from "../components/Features";
import Header from "../components/Header";
import PaymentCategories from "../components/Payments/PaymentCategories"
import Solutions from "../components/Solutions";
import Support from "../components/Support";
import Trial from "../components/Trial";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <PaymentCategories />
      <Features />
      <Solutions />
      <Support />
      <Scuad />
      <Trial />
      <Footer />
    </div>
  );
}
