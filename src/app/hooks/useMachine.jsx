import React, { useContext, useEffect, useState } from "react";
import machineService from "../services/machine.service";
import Loader from "../components/loader";

const MachineContext = React.createContext();

export const useMachine = () => {
  return useContext(MachineContext);
};

const MachineProvider = ({ children }) => {
  const [machines, setMachines] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMachines();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getMachines() {
    try {
      const { content } = await machineService.get();
      setMachines(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher() {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <MachineContext.Provider value={{ machines }}>
      {!isLoading ? children : <Loader />}
    </MachineContext.Provider>
  );
};

export default MachineProvider;
