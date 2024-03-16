import React, { useState, useEffect } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === greeting.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="container__greetings">
        <p className="animated__text">{greeting[currentMessageIndex]}</p>
      </div>
    </>
  );
};
