import imageBrand from "../../assets/polygon2.svg";

import { Component, Container } from "./styles";

export function Footer() {
  return (
    <Component>
      <Container>
        <div className="frame">
          <img src={imageBrand} alt="" />
          <h2>food explorer</h2>
        </div>

        <div className="subtitle">
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </Container>
    </Component>
  );
}
