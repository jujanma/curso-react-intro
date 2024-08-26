import React, { useEffect, useState } from "react";
import "./TodosLoading.css";
function TodosLoading() {
  const [dots, setDots] = useState([".", ".", "."]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        const newDots = [...prevDots];
        newDots.push(".");
        newDots.shift();
        return newDots;
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading-dots">
      {dots.map((dot, index) => (
        <span key={index} className={`dot ${index === 0 ? "active" : ""}`}>
          {dot}
        </span>
      ))}
    </div>
  );
}

export { TodosLoading };
