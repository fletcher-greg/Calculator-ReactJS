import React from "react";

export default ({ curr, prev, op }) => (
  <section className="display">
    <div className="prev">
      {prev}
      <span>{op}</span>
    </div>
    <div className="curr">{curr}</div>
  </section>
);
