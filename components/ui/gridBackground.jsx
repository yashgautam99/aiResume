import { useEffect, useState } from "react";

export default function GridBackground() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // Adjust intensity
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setOffsetX(x);
      setOffsetY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="grid-background"
      style={{
        backgroundPosition: `${offsetX}px ${offsetY}px`,
      }}
    >
      <div className="grid-overlay"></div>
    </div>
  );
}
