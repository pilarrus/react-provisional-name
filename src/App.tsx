import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Adventures from "./pages/Adventures";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Home />
      <Adventures />
      <Error />
    </div>
  );
};

export default App;
