import httpService from "./http.service";

const tradePointEndpoint = "tradePoints/";

const tradePointService = {
  get: async () => {
    const { data } = await httpService.get(tradePointEndpoint);
    return data;
  },
};

export default tradePointService;
