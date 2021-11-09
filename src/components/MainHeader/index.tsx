import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Container } from "./styles";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <div>{emoji}</div>
    </Container>
  );
};

export default MainHeader;
