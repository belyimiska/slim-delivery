import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import tradePointService from "../services/tradePoint.service";
import { fromPromise } from "mobx-utils";

class TradePointStore {
  _tradePoints = [];
  _tradePointByI;

  constructor() {
    makeObservable(this, {
      _tradePoints: observable,
      fetchTradePointsList: action,
      _tradePointByI: observable,
    });
  }

  async fetchTradePointsList() {
    try {
      const { content } = await tradePointService.get();
      this._tradePoints = content;
    } catch (error) {
      console.log(error);
    }
  }

  tradePointById(id) {
    return this.tradePoints.find((tr) => tr.id === id);
  }
}

export default new TradePointStore();
