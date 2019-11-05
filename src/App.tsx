import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Home />
      <Error />

    </div>
  );
};

export default App;
