import { useEffect, useState } from "react";


// Define a type for a star for better code clarity and type safety
interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

// Define a type for a meteor
interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
  delay: number;
}

export const StarBackground = () => {
  // Explicitly set the type for the state arrays
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // Re-generate on window resize to ensure responsiveness
    const handleResize = () => {
      generateStars();
      generateMeteors();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars: Star[] = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors: Meteor[] = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 1.5,
        animationDuration: Math.random() * 3 + 3,
        delay: Math.random() * 10,
      });
    }
    setMeteors(newMeteors);
  };


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="star animate-pulse-subtle absolute rounded-full bg-white" 
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            opacity: meteor.opacity,
            animationDuration: `${meteor.animationDuration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
};