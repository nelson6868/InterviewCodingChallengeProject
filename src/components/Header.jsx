import React from "react";
import Banner from "./Banner";

export default function Header() {
  return (
    <div className="container">
      <hr />
      <Banner
        title={`A faster & easier way to receive ${"payments"} online.`}
        subtitle="Lorem ipsum v dolor sit, amet consectetur adipisicing consectetur perspiciatis officia dolorum consectetur officia debitis."
      />
      <hr />
    </div>
  );
}
