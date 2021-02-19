import React, { useEffect, useState } from "react";
import "./style.css";

const COLUMNS_COUNT = 7;
const DISCS_COUNT = 6;

const createArray = (size: number) =>
  Array.from(new Array(size)).map((_) => []);
  //creating obj with class properties? 

function App() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [columns, setColumns] = useState<number[][]>(
    createArray(COLUMNS_COUNT)
  );
  const [isFirstTurn, setIsFirstTurn] = useState(true);
  const [winner, setWinner] = useState(NaN);

  useEffect(() => {
    let p1 = window.prompt("First player's name", "P1");
    let p2 = window.prompt("Second player's name", "P2");

    setP1(p1 ?? "P1");
    setP2(p2 ?? "P2");
  }, []);

  useEffect(() => {
    // check
    

    setWinner(0);
  }, [columns]);

  const onColumnClick = (columnIndex: number) => {
    const newColumns = columns.map((column, index) => {

      if (index === columnIndex && column.length != 6) {
          return [isFirstTurn ? 0 : 1, ...column];
      }

      return column;
    });
    // console.log(columns)
    setColumns(newColumns);
    setIsFirstTurn(!isFirstTurn);
  };

  return (
    <div className="App">
      <div id="welcome-pane">ConnectFour</div>
      <div id="message-pane">
        First player, click/tap on column where you want to drop your disc.
      </div>
      <div id="board">
        {columns.map((column, index) => (
          <div
            key={index}
            className="column"
            onClick={() => onColumnClick(index)}
          >
            {column.map((disc, i) => (
              <div key={i} className="disc">
                {disc === 0 ? p1 : p2}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner === 0 || (winner === 1 && <div>{} afasdfsadf</div>)}
    </div>
  );
}

export default App;
