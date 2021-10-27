import React from "react";

export default function Banner({ title, subtitle }) {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        height: "50vh",
      }}
    >
      <div className="banner">
        <h1>{title}</h1>
        <p className='mt-3'>{subtitle}</p>
        <button className="btn btn-success w-50 mt-4">Create an Account</button>
      </div>
    </div>
  );
}
