// Import the necessary modules
import React, { useState } from "react";
import "./app.css";
import RefuelingForm from "./components/RefuelingForm";
import RefuelingList from "./components/RefuelingList";
import RefuelingStats from "./components/RefuelingStats";

function App() {
  // Declare state for the refueling list using the useState hook
  const [refuelingList, setRefuelingList] = useState([]);

  // Function to add a new refueling expense to the refueling list
  const addRefuelingExpense = (newRefueling) => {
    // Update the refueling list with the new refueling expense
    setRefuelingList([...refuelingList, newRefueling]);
  };

  return (
    <div className="App">
      <h1>Car Fuel Expenses</h1>
      // Render the RefuelingForm component and pass the addRefuelingExpense function as a prop
      <RefuelingForm onAddRefuelingExpense={addRefuelingExpense} />
      // Render the RefuelingList component and pass the refueling list as a prop
      <RefuelingList refuelingList={refuelingList} />
      // Render the RefuelingStats component and pass the refueling list as a prop
      <RefuelingStats refuelingList={refuelingList} />
    </div>
  );
}

// Export the App component as the default export
export default App;

