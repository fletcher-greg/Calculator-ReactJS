import React, { useState } from "react";
import Display from "../components/calculator/Display";
import Button from "../components/calculator/Button";

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
  let [test, setTest] = useState("");
  function compute() {
    console.log("yesss");
    let current = parseFloat(curr);
    let previous = parseFloat(prev);
    switch (op) {
      case "+":
        setPrev(current + previous);
        setCurr("");
        break;
      case "-":
        setPrev(previous - current);
        setCurr("");
        break;
      case "/":
        setPrev(previous / current);
        setCurr("");
        break;
      case "*":
        setPrev(previous * current);
        setCurr("");
        break;
      default:
        console.log("lol");
        break;
    }
  }
  function append(e) {
    let newInput = e.target.innerText;
    if (newInput === "." && curr.includes(".")) return;
    setCurr(curr + newInput);
  }
  function operation(e) {
    let currentOp = e.target.innerText;
    if (!curr) {
      console.log("no current");
      setOp(currentOp);
      return;
    }
    if (currentOp === "=") {
      compute();
      setCurr(prev);
      setPrev("");
      setOp("");
      console.log("yo");

      return;
    }

    setOp(currentOp);
    setTest("fuck");
    console.log(`for fucks sake ${op}`);
    console.log(`fucking ${test}`);
    if (!/DEL|AC|=/.test(currentOp)) {
      console.log("no DEL");
      console.log(`op: ${op} innertet ${currentOp}`);
      if (prev && curr) {
        compute();
        return;
      }
      currentOp === "DEL"
        ? setPrev(prev.slice(0, prev.length - 1))
        : setPrev("") && setCurr("");

      return;
    }
    console.log("final");
    setPrev(curr);
    setCurr("");
  }
  return (
    <div className="Calc">
      <Display curr={curr} prev={prev} op={op} />
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
