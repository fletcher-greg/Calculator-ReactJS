import React, { useState } from "react";
import Display from "../components/calculator/Display";
import Button from "../components/calculator/Button";
import { toComputedKey } from "@babel/types";

let data = [
  { key: 1, cName: "span-2", op: true, text: "AC" },
  { key: 2, cName: "span-1", op: true, text: "DEL" },
  { key: 3, cName: "span-1", op: true, text: "/" },
  { key: 4, cName: "span-1", text: "1" },
  { key: 5, cName: "span-1", text: "2" },
  { key: 6, cName: "span-1", text: "3" },
  { key: 7, cName: "span-1", op: true, text: "*" },
  { key: 8, cName: "span-1", text: "4" },
  { key: 9, cName: "span-1", text: "5" },
  { key: 10, cName: "span-1", text: "6" },
  { key: 11, cName: "span-1", op: true, text: "+" },
  { key: 12, cName: "span-1", text: "7" },
  { key: 13, cName: "span-1", text: "8" },
  { key: 14, cName: "span-1", text: "9" },
  { key: 15, cName: "span-1", op: true, text: "-" },
  { key: 16, cName: "span-1", text: "." },
  { key: 17, cName: "span-1", text: "0" },
  { key: 18, cName: "span-2", op: true, text: "=" }
];

export default () => {
  let [curr, setCurr] = useState("");
  let [prev, setPrev] = useState("");
  let [op, setOp] = useState("");
  function compute() {
    console.log("yesss");
    let current = parseFloat(curr);
    let previous = parseFloat(prev);
    switch (op) {
      case "+":
        setPrev(current + previous);
        setCurr("");
        break;
      default:
        console.log("lol");
    }
  }
  function append(e) {
    let newInput = e.target.innerText;
    if (newInput === "." && curr.includes(".")) return;
    setCurr(curr + newInput);
    console.log("hi");
  }
  function operation(e) {
    if (!curr) {
      return;
    }

    if (prev) {
      compute();
      //   return;
    }

    setOp(e.target.innerText);
    if (!/DEL|AC|=/.test(op)) {
      console.log("not DEL");
      setPrev(curr + op);
      setCurr("");
      return;
    }
    console.log("final");
    setPrev(curr);
    setCurr("");
  }
  return (
    <div className="Calc">
      <Display curr={curr} prev={prev} />
      {data.map(d => (
        <Button
          key={d.key}
          operation={d.op ? operation : append}
          cName={d.cName}
          text={d.text}
        />
      ))}
    </div>
  );
};
