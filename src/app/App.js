import React from "react";
import MachinesList from "./components/machinesList";

import "./css/main.css";
import MachineProvider from "./hooks/useMachine";
import { TradePointProvider } from "./hooks/useTradePoint";
import { MachineTagProvider } from "./hooks/useTag";

function App() {
  return (
    <MachineProvider>
      <TradePointProvider>
        <MachineTagProvider>
          <MachinesList />
        </MachineTagProvider>
      </TradePointProvider>
    </MachineProvider>
  );
}

export default App;
