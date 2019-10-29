import React from "react";
import Navbar from "./layout/navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Navbar />
      <Home />
      <Error />
    </div>
  );
};

export default App;
