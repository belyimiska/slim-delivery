import httpService from "./http.service";

const machineTagEndpoint = "machineTags/";

const tagService = {
  get: async () => {
    const { data } = await httpService.get(machineTagEndpoint);
    return data;
  },
};

export default tagService;
