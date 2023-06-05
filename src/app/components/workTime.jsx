import React from "react";

const WorkTime = ({ tradePoint }) => {
  const getCurrentDay = (index) => {
    const newDate = new Date();

    const isCurrentDay = newDate.getDay() === index ? true : false;

    return isCurrentDay;
  };

  const getOpenHours = () => {
    const newDate = new Date();
    const currentDay = newDate.getDay();

    const currentDayKey = Object.keys(tradePoint.workingTime).filter(
      (day) => tradePoint.workingTime[day].dayIndex === currentDay
    );

    const workHours = tradePoint.workingTime[currentDayKey].time;

    let openHour = "";

    if (workHours.length === 8) {
      openHour = workHours;
    } else {
      openHour = workHours.slice(8);
    }

    return openHour;
  };

  const sortDays = (workTime) => {
    const timetable = { ...workTime };

    const workTimeArr = Object.keys(timetable).map((day) => timetable[day]);

    workTimeArr.sort((a, b) => {
      if (a.dayIndex > b.dayIndex) {
        return 1;
      }

      if (a.dayIndex < b.dayIndex) {
        return -1;
      }
      return 0;
    });

    const sun = workTimeArr.shift();
    workTimeArr.push(sun);

    return workTimeArr;
  };

  return (
    <div className="working-time">
      <h3 className="working-time__title">Время работы</h3>

      <div className="working-time__table-wrapper">
        <p>Открыто до: {getOpenHours()}</p>

        <table className="working-time__table">
          <tbody>
            {sortDays(tradePoint.workingTime).map((day) => (
              <tr key={day.name + day.time}>
                <td>
                  <div
                    className={
                      "working-time__table--current" +
                      (getCurrentDay(day.dayIndex)
                        ? ""
                        : " working-time__table--current-not")
                    }
                  ></div>
                </td>
                <td>{day.name}</td>
                <td>{day.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkTime;
