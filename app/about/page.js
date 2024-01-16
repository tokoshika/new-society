"use client";
import Image from "next/image";
import Image1 from "@/public/image/image1.jpg";
import Image2 from "@/public/image/image2.jpg";
import { useState } from "react";
export default function About() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>This is about.page</h1>
      <button onClick={onClick}>click</button>
      <br />
      {count}
      <div></div>
      <Image
        className="image"
        width="50%"
        height="50%"
        src={Image1}
        alt="ハルピン"
      />
      <Image
        className="image"
        width="612"
        height="408"
        src={Image2}
        alt="ハルピン"
      />
    </div>
  );
}
