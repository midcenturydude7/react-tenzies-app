import React from "react";
import Die from "./Components/Die";

export default function App() {

  // eslint-disable-next-line no-unused-vars
  const [dice, setDice] = React.useState(allNewDice());
  
  function allNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  // eslint-disable-next-line react/jsx-key
  const diceElements = dice.map(die => <Die value={die} />);


  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}
