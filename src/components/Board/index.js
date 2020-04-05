import React, { useState } from "react";
import produce from "immer";
import { loadLists } from "../../services/api";
import BoardContext from "./context";
import List from "../List";

import { Container } from "./styles";
import { useEffect } from "react";

export default function Board() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    setLists(loadLists());
  }, []);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
