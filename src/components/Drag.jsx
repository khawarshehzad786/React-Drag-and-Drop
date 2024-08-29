/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

    
    //   {
    //     id: 1,
    //     url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   },
    //   {
    //     id: 2,
    //     url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //   },
    //   {
    //     id: 3,
    //     url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //   },
    // ];
  
import  { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
        id: 1,
        url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      },
      {
        id: 3,
        url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
];

function Drag() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures flex" >
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board flex flex-col justify-center text-center items-center"  ref={drop}>
        {board.map((picture) => {
          return <Picture className='flex' url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default Drag;