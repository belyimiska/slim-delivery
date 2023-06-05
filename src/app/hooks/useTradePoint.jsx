import React, { useContext, useEffect, useState } from "react";
import tradePointService from "../services/tradePoint.service";
import Loader from "../components/loader";

const TradePointContext = React.createContext();

export const useTradePoint = () => {
  return useContext(TradePointContext);
};

export const TradePointProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [tradePoint, setTradePoint] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTradePointsList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getTradePointsList() {
    try {
      const { content } = await tradePointService.get();
      setTradePoint(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher() {
    const { message } = error.response.data;
    setError(message);
  }

  function getTradePoint(id) {
    return tradePoint.find((tr) => tr.id === id);
  }

  return (
    <TradePointContext.Provider value={{ tradePoint, getTradePoint }}>
      {!isLoading ? children : <Loader />}
    </TradePointContext.Provider>
  );
};
