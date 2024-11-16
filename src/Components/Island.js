import React from "react";
import { useState } from "react";

export default function Island({ island, setIsland}) {
  const [visitors, setVisitors] = useState(0);

  const handleClick = () => {
    setIsland(island);
  };
  
  const handleVisitors = () => {
    setVisitors(visitors + 1); 
  };

  return (
    <div className="Island" onClick={handleClick}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors: {visitors}</p>
      <img src={island.img} alt={island.name} />
      <button onClick={handleVisitors}>Visit Island</button>
    </div>
  );
}
