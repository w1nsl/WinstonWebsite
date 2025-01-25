import React from "react";
import { ReactTyped } from "react-typed";

const TypingAnimation: React.FC = () => {
  return (
    <ReactTyped
      strings={["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Rockstar 🎸"]}
      typeSpeed={50}
      backSpeed={30}
      loop
      className="text-gray-300"
    />
  );
};

export default TypingAnimation;