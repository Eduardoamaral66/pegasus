import React, { useState } from "react";
import { loadLists } from "../../services/api";
import List from "../List";

import { Container } from "./styles";
import { useEffect } from "react";

export default function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(loadLists());
  }, []);

  return (
    <Container>
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
