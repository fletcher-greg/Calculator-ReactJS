import React from "react";
import Display from "../components/calculator/Display";
import Button from "../components/calculator/Button";

let data = [
  { cName: "span-2", text: "AC" },
  { cName: "span-1", text: "DEL" },
  { cName: "span-1", text: "/" },
  { cName: "span-1", text: "1" },
  { cName: "span-1", text: "2" },
  { cName: "span-1", text: "3" },
  { cName: "span-1", text: "*" },
  { cName: "span-1", text: "4" },
  { cName: "span-1", text: "5" },
  { cName: "span-1", text: "6" },
  { cName: "span-1", text: "+" },
  { cName: "span-1", text: "7" },
  { cName: "span-1", text: "8" },
  { cName: "span-1", text: "9" },
  { cName: "span-1", text: "-" },
  { cName: "span-1", text: "." },
  { cName: "span-1", text: "0" },
  { cName: "span-2", text: "=" }
];

export default () => {
  return (
    <div className="Calc">
      <Display />
      {data.map(d => (
        <Button cName={d.cName} text={d.text} />
      ))}
    </div>
  );
};
