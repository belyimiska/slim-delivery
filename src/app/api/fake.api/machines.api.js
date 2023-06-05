const tradePoints = {
  tatarstan: {
    id: "67rdca3eeb7f6fgeed471818",
    location: {
      address: "Казань, улица Татарстан 52",
      latitude: 55.778973,
      longitude: 49.109917,
    },
    workingTime: {
      mon: { time: "08:00 - 22:00", name: "Понедельник", dayIndex: 1 },
      tue: { time: "08:00 - 22:00", name: "Вторник", dayIndex: 2 },
      wed: { time: "08:00 - 22:00", name: "Среда", dayIndex: 3 },
      thu: { time: "08:00 - 22:00", name: "Четверг", dayIndex: 4 },
      fri: { time: "08:00 - 22:00", name: "Пятница", dayIndex: 5 },
      sat: { time: "08:00 - 22:00", name: "Суббота", dayIndex: 6 },
      sun: { time: "Выходной", name: "Воскресенье", dayIndex: 0 },
    },
  },
  spartak: {
    id: "67rdca3eeb7f6fgeed471819",
    location: {
      address: "Казань, Спартаковская улица, 2к3",
      latitude: 55.781205,
      longitude: 49.126078,
    },
    workingTime: {
      mon: { time: "10:00 - 20:00", name: "Понедельник", dayIndex: 1 },
      tue: { time: "10:00 - 20:00", name: "Вторник", dayIndex: 2 },
      wed: { time: "10:00 - 20:00", name: "Среда", dayIndex: 3 },
      thu: { time: "10:00 - 20:00", name: "Четверг", dayIndex: 4 },
      fri: { time: "10:00 - 20:00", name: "Пятница", dayIndex: 5 },
      sat: { time: "Выходной", name: "Суббота", dayIndex: 6 },
      sun: { time: "Выходной", name: "Воскресенье", dayIndex: 0 },
    },
  },
};

const machineTags = {
  nonCash: {
    id: "67rdca3eeb7f6fgeed471198",
    name: "Безнал",
    class: "non-cash",
  },
  coffee: {
    id: "67rdca3eeb7f6fgeed471100",
    name: "Кофе",
    class: "coffee",
  },
  cashier: {
    id: "67rdca3eeb7f6fgeed4711012",
    name: "Есть кассир",
    class: "cashier",
  },
  hotСhocolate: {
    id: "67rdca3eeb7f6fgeed471101",
    name: "Горячий шоколад",
    class: "chocolate",
  },
  juices: {
    id: "67rdca3eeb7f6fgeed471102",
    name: "Соки",
    class: "juice",
  },
};

const machines = [
  {
    id: "67rdca3eeb7f6fgeed471815",
    serialNumber: "FFTA4V",
    tradePointId: tradePoints.tatarstan,
    floor: 1,
    tags: [machineTags.nonCash, machineTags.coffee],
  },
  {
    id: "67rdca3eeb7f6fgeed471816",
    serialNumber: "DF1245",
    tradePointId: tradePoints.spartak,
    floor: 1,
    tags: [machineTags.nonCash, machineTags.coffee],
  },
  {
    id: "67rdca3eeb7f6fgeed471817",
    serialNumber: "DF1246",
    tradePointId: tradePoints.spartak,
    floor: 2,
    tags: [machineTags.nonCash, machineTags.juices],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(machines);
    }, 2000);
  });

export default {
  fetchAll,
};

// const machineTypes = {
//     firstType: {
//       id: 1,
//       tags: ["only_non_cash_payments", "coffee"],
//     },
//     secondType: {
//       id: 2,
//       tags: ["cashier", "coffee", "hot_chocolate", "juices"],
//     },
//     thirdType: {
//       id: 3,
//       tags: ["only_non_cash_payments", "juices"],
//     },
//   };
