"use client";

import Counter from "@/components/Counter";
import CounterHOc from "@/components/hoc/CounterHOc";



const RedCounter = CounterHOc(Counter, 'red');
const GreenCounter = CounterHOc(Counter, 'green');
const BlueCounter = CounterHOc(Counter, 'blue');

const page = () => {
  return (
    <>
        <div className="container">
        <h2>Higher order components</h2>
          <RedCounter />
          <GreenCounter />
          <BlueCounter />
        <hr />
      </div>
    </>
  )
}

export default page