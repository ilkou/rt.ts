import React, { useState } from "react";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("red");
  return <div style={{ color: color }}>RT project in progress</div>;
};

export default App;
