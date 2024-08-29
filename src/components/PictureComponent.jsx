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
      width="150px"
      alt="img"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
}

export default PictureComponent;