import React, { useState } from "react";
import WorkTime from "./workTime";
import { useTradePoint } from "../hooks/useTradePoint";
import { useMachineTag } from "../hooks/useTag";
import { observer } from "mobx-react-lite";

const MachinePage = ({ serialNumber, tradePointId, floor, tags }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const { getTradePoint } = useTradePoint();
  const { getTag } = useMachineTag();

  const tradePoint = getTradePoint(tradePointId);

  const handleOpenPopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  return (
    <>
      <div className="machine-card">
        <div className="machine-card__info">
          <div className="machine-card__title">
            <h3 className="machine-card__id">{"#" + serialNumber}</h3>

            <div className="machine-card__tags-row">
              {tags.map((tag) => (
                <span
                  className={
                    "machine-card__tag machine-card__tag--" + getTag(tag).class
                  }
                  key={getTag(tag).id}
                >
                  {getTag(tag).name}
                </span>
              ))}
            </div>
          </div>

          <div className="machine-card__adress-block">
            <p>{tradePoint.location.address}</p>
          </div>

          <div className="machine-card__floor-block">
            <p>{"Этаж: " + floor}</p>
          </div>

          <button className="machine-card__work-time" onClick={handleOpenPopup}>
            Время работы
          </button>
        </div>

        <div className="machine-card__map">
          <img
            src={`http://static.maps.2gis.com/1.0?size=350,200&markers=pmrdm,${tradePoint.location.longitude},${tradePoint.location.latitude}`}
            alt="map"
          />
        </div>
      </div>

      {isPopupOpened && <WorkTime tradePoint={tradePoint} />}
    </>
  );
};

export default MachinePage;
