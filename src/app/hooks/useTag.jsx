import React, { useContext, useEffect, useState } from "react";
import tagService from "../services/tag.service";
import Loader from "../components/loader";

const MachineTagContext = React.createContext();

export const useMachineTag = () => {
  return useContext(MachineTagContext);
};

export const MachineTagProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [machineTag, setMachineTag] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTagsList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getTagsList() {
    try {
      const { content } = await tagService.get();
      setMachineTag(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher() {
    const { message } = error.response.data;
    setError(message);
  }

  function getTag(id) {
    return machineTag.find((tag) => tag.id === id);
  }

  return (
    <MachineTagContext.Provider value={{ machineTag, getTag }}>
      {!isLoading ? children : <Loader />}
    </MachineTagContext.Provider>
  );
};
