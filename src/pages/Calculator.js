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
  let [complete, setComplete] = useState("");

  function compute() {
    console.log("compute");
    let current = parseFloat(curr);
    let previous = parseFloat(prev);
    switch (op) {
      case "+":
        setPrev(String(current + previous));
        setCurr("");
        break;
      case "-":
        setPrev(String(previous - current));
        setCurr("");
        break;
      case "/":
        setPrev(String(previous / current));
        setCurr("");
        break;
      case "*":
        setPrev(String(previous * current));
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
    if (complete === "=") {
      setPrev(curr);

      setCurr(newInput);
      setComplete("");
      return;
    }
    setCurr(curr + newInput);
    console.log("concat");
  }
  function operation(e) {
    let currentOp = String(e.target.innerText);
    let notDelAC = !/DEL|AC|=/.test(currentOp);
    if (notDelAC) {
      setOp(notDelAC ? currentOp : op);
      if (!curr) {
        console.log("no current");

        return;
      }

      if (notDelAC) {
        console.log(`innerText ${currentOp}`);
        if (prev && curr) {
          console.log(`prev ${prev} curr ${curr}`);
          compute();
          return;
        }
        setPrev(curr);
        setCurr("");
        // currentOp === "DEL"
        //   ? setPrev(prev.slice(0, prev.length - 1))
        //   : setPrev("lol") && setCurr("lol");
        // console.log("this far");
        return;
      }

      console.log("final");
      setPrev(curr);
      setCurr("");
    } else if (currentOp === "=" && op) {
      console.log("the operation is: " + op);
      compute();
      setOp("");
      setComplete("=");
      console.log("yo");

      return;
    } else {
      console.log("trying");
      if (currentOp === "DEL" && curr.length > 0) {
        setCurr(curr.slice(0, curr.length - 1));
      } else if (currentOp === "DEL") {
        console.log(typeof prev);
        op ? setOp("") : setPrev(prev.slice(0, prev.length - 1));
      } else {
        setCurr("");
        setPrev("");
        setOp("");
      }
    }
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
