import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import imageBrand from "../../assets/polygon2.svg";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="frame">
        <img src={imageBrand} alt="" />
        <h2>food explorer</h2>
      </div>

      <div className="subtitle">
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
