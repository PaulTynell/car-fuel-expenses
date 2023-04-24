import React from "react";

const RefuelingList = ({ refuelingList }) => {
  return (
    <>
      <h2>Refueling History</h2>
      <ul>
        {refuelingList.map((item) => (
          <li key={item.id}>
            {item.name} - {item.liters} L - €{item.price} - {item.distance} km
          </li>
        ))}
      </ul>
    </>
  );
};

export default RefuelingList;
