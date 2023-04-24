import React, { useState } from "react";

const RefuelingForm = ({ onAddRefuelingExpense }) => {
  const [name, setName] = useState("");
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");

  const addRefuelingExpense = () => {
    const newRefueling = {
      id: new Date().getTime(),
      name,
      liters: parseFloat(liters),
      price: parseFloat(price),
      distance: parseFloat(distance),
    };
    onAddRefuelingExpense(newRefueling);
    setName("");
    setLiters("");
    setPrice("");
    setDistance("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Car name"
      />
      <input
        type="number"
        value={liters}
        onChange={(e) => setLiters(e.target.value)}
        placeholder="Liters"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Distance"
      />
      <button onClick={addRefuelingExpense}>Add Refueling Expense</button>
    </div>
  );
};

export default RefuelingForm;
