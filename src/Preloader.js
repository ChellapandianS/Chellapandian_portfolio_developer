import React, { useState, useEffect } from "react";
import profileImg from "./progress.png"; // your custom PNG
import "./index.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // hide preloader when 100%
          return 100;
        }
        return prev + 1; // increment by 1%
      });
    }, 20); // speed of increment
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <img src={profileImg} alt="Loading..." className="preloader-img" />
      <p className="preloader-text">{percentage}%</p>
    </div>
  );
};

export default Preloader;
