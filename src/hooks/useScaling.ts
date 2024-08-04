import { useState, useEffect } from "react";

const useScaling = () => {
  // Scaling Factor for 3D Experience
  const calculateScalingFactor = () => {
    return Math.min(Math.max(0.45, window.innerWidth / 1440), 1.2);
  };

  const [scalingFactor, setScalingFactor] = useState(calculateScalingFactor);

  const handleResize = () => {
    setScalingFactor(calculateScalingFactor());
  };

  // Window Resize Event Listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { scalingFactor };
};

export default useScaling;
