// Create the RefuelingStats component that receives the refuelingList as a prop
const RefuelingStats = ({ refuelingList }) => {
  // Function to calculate the total statistics for an array of refuelings
  const calculateTotalStats = (refuelings) => {
    const totalLiters = refuelings.reduce((acc, cur) => acc + cur.liters, 0);
    const totalPrice = refuelings.reduce((acc, cur) => acc + cur.price, 0);
    const totalDistance = refuelings.reduce((acc, cur) => acc + cur.distance, 0);
    const avgExpenses = totalDistance === 0 ? 0 : (totalPrice / totalDistance) * 100;
    const avgConsumption = totalDistance === 0 ? 0 : (totalLiters / totalDistance) * 100;
    return { totalLiters, totalPrice, totalDistance, avgExpenses, avgConsumption };
  };

  // Calculate the total statistics for all refuelings
  const totalStats = calculateTotalStats(refuelingList);

  // Group the refuelings by car name
  const carStats = refuelingList.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = [];
    }
    acc[cur.name].push(cur);
    return acc;
  }, {});

  return (
    <div>
      <h2>Total Refueling Expenses</h2>
      <p>Total Sum: €{totalStats.totalPrice.toFixed(2)}</p>
      <p>Total Consumption: {totalStats.totalLiters.toFixed(2)} L</p>
      <p>Total Distance: {totalStats.totalDistance.toFixed(2)} km</p>
      <p>Average Expenses per 100 km: €{totalStats.avgExpenses.toFixed(2)}</p>
      <p>Average Consumption per 100 km: {totalStats.avgConsumption.toFixed(2)} L</p>

      <h2>Refueling Expenses by Car</h2>
      {
        // Iterate through the carStats object and display individual car statistics
        Object.entries(carStats).map(([carName, refuelings]) => {
          // Calculate the statistics for each car
          const stats = calculateTotalStats(refuelings);
          return (
            <div key={carName}>
              <h3>{carName}</h3>
              <p>Total Sum: €{stats.totalPrice.toFixed(2)}</p>
              <p>Total Consumption: {stats.totalLiters.toFixed(2)} L</p>
              <p>Total Distance: {stats.totalDistance.toFixed(2)} km</p>
              <p>Average Expenses per 100 km: €{stats.avgExpenses.toFixed(2)}</p>
              <p>Average Consumption per 100 km: {stats.avgConsumption.toFixed(2)} L</p>
            </div>
          );
        })
      }
    </div>
  );
};

// Export the RefuelingStats component as the default export
export default RefuelingStats;

