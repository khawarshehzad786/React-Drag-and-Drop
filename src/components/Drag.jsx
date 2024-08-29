/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

  
import  { useState } from "react";
import Picture from "./PictureComponent";
import { useDrop } from "react-dnd";
import "../App.css";

//images are comming from FakeStore API
const data = [
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
  const [boardimg, setBoardImg] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = data.filter((picture) => id === picture.id);
    setBoardImg((boardimg) => [...boardimg, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures flex m-auto justify-center border-[5px]" >
        {data.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <h2 className="text-left ml-4 my-5">Drag Your Images here</h2>
      <div className="Board flex flex-col justify-center text-center items-center"  ref={drop}>
        {boardimg.map((picture) => {
          return <Picture  className='flex' url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default Drag;