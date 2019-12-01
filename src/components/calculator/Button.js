import React from "react";

export default ({ cName, text, operation }) => (
  <button onClick={e => operation(e)} className={cName}>
    {text}
  </button>
);
