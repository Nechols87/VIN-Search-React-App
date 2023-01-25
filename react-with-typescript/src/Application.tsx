import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import VinSearch from "./pages/VinSearch";
import { IApplicationProps } from "./interface";

const App: React.FunctionComponent<IApplicationProps> = () => {
  const [vehicleSelection, setVehicleSelection] = useState<any>([]);
  

  // Callback function to consume the name from the child component
  const nameSelection = (vehicles: any): void => {
    setVehicleSelection(vehicles);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage nameSelection={nameSelection} />} />
        <Route
          path="vinSearch"
          element={<VinSearch vehicleSelection={vehicleSelection} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
