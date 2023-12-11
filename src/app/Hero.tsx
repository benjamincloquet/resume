"use client";

import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const fullText = useRef(
    "I am a front end engineer ! I have been designing and implementing software solutions for more than five years, working with Ubisoft, CGI, Atos and more. My tools of choice are Next.js with TypeScript.",
  );
  const [text, setText] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);
  const delay = useRef(80);
  const isDone = caretPosition > fullText.current.length

  useEffect(() => {
    const type = () => {
      if (isDone)
        return
      setCaretPosition(caretPosition + 1)
      setText(fullText.current.substring(0, caretPosition) + ' '.repeat(fullText.current.length - caretPosition))
    };

    setTimeout(type, delay.current);
  }, [text, isDone, caretPosition]);

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
