// Import the necessary modules
import React, { useState } from "react";

// RefuelingForm component definition, receiving onAddRefuelingExpense function as a prop
const RefuelingForm = ({ onAddRefuelingExpense }) => {
  // Declare state for form inputs using useState hooks
  const [name, setName] = useState("");
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");

  // Function to add a refueling expense using the input values
  const addRefuelingExpense = () => {
    // Create a new refueling object with the input values
    const newRefueling = {
      id: new Date().getTime(),
      name,
      liters: parseFloat(liters),
      price: parseFloat(price),
      distance: parseFloat(distance),
    };

    // Call the onAddRefuelingExpense function (received as a prop) with the new refueling object
    onAddRefuelingExpense(newRefueling);

    // Reset the input fields to their initial state
    setName("");
    setLiters("");
    setPrice("");
    setDistance("");
  };

  // Render the form with input fields and a button to add a refueling expense
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

// Export the RefuelingForm component as the default export
export default RefuelingForm;

