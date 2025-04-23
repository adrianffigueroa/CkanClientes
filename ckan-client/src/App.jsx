import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-col min-h-screen bg-gray-100 flex items-center justify-center w-screen">
      <h1 className="text-3xl font-bold text-blue-600">CKAN Cliente</h1>
      <Button onClick={() => setCount(count + 1)}>Aumentar cuenta</Button>
      <div>{count}</div>
    </div>
  );
}

export default App;
