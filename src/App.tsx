import React from "react";
import Adventures from "./pages/Adventures";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Social from "./pages/Social";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Home />
      <Adventures />
      <Social />
      <Error />
    </div>
  );
};

export default App;
