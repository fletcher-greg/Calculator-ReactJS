import React from "react";

export default ({ curr, prev }) => (
  <section className="display">
    <div className="prev">{prev}</div>
    <div className="curr">{curr}</div>
  </section>
);
