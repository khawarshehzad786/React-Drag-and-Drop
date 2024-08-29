/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

function PictureComponent({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={url}
      width="160px"
      alt="img"
      style={{ border: isDragging ? "5px solid red" : "0px" }}
    />
  );
}

export default PictureComponent;
