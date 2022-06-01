import React, { useState } from "react";
import { createBoard } from "./createBoard";
import "./styles.css";
export const MemoryComponent = () => {
  const list = createBoard(50);
  const [stateBoard, setStateBoard] = useState(list);
  const handlerClick = ({ id }) => {
    const newStateBoard = stateBoard.map((item) => {
      if (item.id == id) {
        item.state = true;
        item.styles = "itemColor";
      }
      return item;
    });
    setStateBoard(newStateBoard);
  };
  return (
    <div>
      <h1>ReactJs Memory Game </h1>
      <hr />
      <div className="container">
        {stateBoard.map((item) => {
          return (
            <div 
            className={item.styles}
            key= {item.id}
            onClick={() =>{
                handlerClick(item);
            }}
            >
               {item.state === true ? (
                <div className="content">{item.frontend}</div>
              ) : (
                <div className="content">{item.backend}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
