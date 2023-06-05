import React, { useState } from "react";
import MachinePage from "./machinePage";
import NotFoundBlock from "./notFoundBlock";
import { useMachine } from "../hooks/useMachine";
import { observer } from "mobx-react-lite";

const MachinesList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { machines } = useMachine();

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  const filteredMachines = searchQuery
    ? machines.filter(
        (machine) =>
          machine.serialNumber
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) !== -1
      )
    : machines;

  return (
    <section className="section-list">
      <div className="container">
        <div className="section-list__content">
          <div className="section-list__top-row">
            <h1 className="section-list__header">Список /</h1>

            <div className="search">
              <input
                type="text"
                className="search__input"
                name="searchQuery"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={handleSearchQuery}
              />
            </div>
          </div>

          {filteredMachines.length > 0 ? (
            <div className="machines-wrapper">
              {filteredMachines.map((item) => (
                <MachinePage key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <NotFoundBlock />
          )}
        </div>
      </div>
    </section>
  );
};

export default MachinesList;
