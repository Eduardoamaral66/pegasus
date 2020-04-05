import React, { useContext } from "react";
import BoardContext from "../Board/context";
import Card from "../Card";
import { useDrop } from "react-dnd";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;
      move(draggedListIndex, targetListIndex, draggedIndex, -1);
    },
  });

  return (
    <Container ref={dropRef} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} data={card} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}
