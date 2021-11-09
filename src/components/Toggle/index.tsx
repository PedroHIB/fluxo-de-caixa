import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./style";

const Toggle: React.FC = () => {
  const [themeChange, setThemeChange] = useState(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={themeChange}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setThemeChange(!themeChange)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
