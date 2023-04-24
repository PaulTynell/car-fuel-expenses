// Import the React module
import React from "react";

// Create the RefuelingList component that receives the refuelingList as a prop
const RefuelingList = ({ refuelingList }) => {
  return (
    // Use a React Fragment to wrap the elements without adding extra DOM nodes
    <>
      <h2>Refueling History</h2>
      <ul>
        {
          // Map over the refuelingList array and create a list item for each refueling expense
          refuelingList.map((item) => (
            // Use the item's id as the key for each list item to help React optimize rendering
            <li key={item.id}>
              {item.name} - {item.liters} L - €{item.price} - {item.distance} km
            </li>
          ))
        }
      </ul>
    </>
  );
};

// Export the RefuelingList component as the default export
export default RefuelingList;
