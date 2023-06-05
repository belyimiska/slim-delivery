import httpService from "./http.service";

const machineEndpoint = "machine/";

const machineService = {
  get: async () => {
    const { data } = await httpService.get(machineEndpoint);
    return data;
  },
};

export default machineService;
