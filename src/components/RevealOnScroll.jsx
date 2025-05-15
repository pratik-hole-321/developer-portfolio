import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          divRef.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  });
  return (
    <div ref={divRef} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
