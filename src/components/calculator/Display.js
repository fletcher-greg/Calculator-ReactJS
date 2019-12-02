import React from "react";

export default ({ curr, prev, op }) => (
  <section className="display">
    <div className="prev">
      <p className="content">
        {prev}
        <span>{op}</span>
      </p>
    </div>
    <div className="curr">
      <p className="content">{curr}</p>
    </div>
  </section>
);
