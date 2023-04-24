import React, { useState } from "react";
import "./app.css";
import RefuelingForm from "./components/RefuelingForm";
import RefuelingList from "./components/RefuelingList";
import RefuelingStats from "./components/RefuelingStats";

function App() {
  const [refuelingList, setRefuelingList] = useState([]);

  const addRefuelingExpense = (newRefueling) => {
    setRefuelingList([...refuelingList, newRefueling]);
  };

  return (
    <div className="App">
      <h1>Car Fuel Expenses</h1>
      <RefuelingForm onAddRefuelingExpense={addRefuelingExpense} />
      <RefuelingList refuelingList={refuelingList} />
      <RefuelingStats refuelingList={refuelingList} />
    </div>
  );
}

export default App;
