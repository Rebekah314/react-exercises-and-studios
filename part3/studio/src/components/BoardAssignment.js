import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    {
      label: "Vegetarian Recipes",
      value: 0,
    },
    {
      label: "Healthy Meals",
      value: 1,
    },
    {
      label: "Soups",
      value: 2,
    },
  ];
  const [boardName, setName] = useState("no boards yet!");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((item) => {
          return <option value={item.label}>{item.label}</option>;
         })}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
