import React, { useEffect, useState } from "react";
import "./MeteorAnimation.css";

export const MeteorAnimation = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();

    const handleResize = () => {
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="meteor-container">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size * 10 + "px",
            height: meteor.size * 0.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
