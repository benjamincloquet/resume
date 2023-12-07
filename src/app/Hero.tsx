"use client";

import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const fullText = useRef(
    "I am a front end engineer ! I have been designing and implementing software solutions for more than 5 years, working with Ubisoft, CGI, Atos and more. My tools of choice are React - or Vue.js - with TypeScript.",
  );
  const [text, setText] = useState("");
  const delay = useRef(80);
  const isDone = text.length === fullText.current.length

  const type = () => {
    if (isDone)
      return
    setText(fullText.current.substring(0, text.length + 1))
  };

  useEffect(() => {
    setTimeout(type, delay.current);
  }, [text]);

  return (
    <div className="font-mono">
      <p>Hello, my name is</p>
      <p className="text-2xl mb-2">
        Benjamin <span className="font-medium">Cloquet</span>
      </p>
      <p>{text}<span className="caret"></span></p>
    </div>
  );
};
export default Hero;
