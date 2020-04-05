import React from "react";
import { GiPegasus } from "react-icons/gi";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>
        <GiPegasus /> Pegasus
      </h1>
    </Container>
  );
}
