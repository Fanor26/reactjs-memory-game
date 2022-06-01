import React, { useState } from "react";
import { createBoard } from "./createBoard";
import "./styles.css";
export const MemoryComponent = () => {
  const list = createBoard(50);
  const [stateBoard, setStateBoard] = useState(list);
  return (
    <div>
      <h1>ReactJs Memory Game </h1>
      <hr />
      <div className="container">
        {stateBoard.map((item) => {
          return (
            <div className="item">
              <div className="content">{item.backend}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
