import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  computed,
} from "mobx";
import machineService from "../services/machine.service";

class MachinesStore {
  machines = [];

  constructor() {
    makeObservable(this, {
      fetchMachinesList: action,
      _machines: observable,
    });
  }

  async fetchMachinesList() {
    try {
      const { content } = await machineService.get();
      this.machines = content;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MachinesStore();
