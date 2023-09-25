import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import imageBrand from "../../assets/polygon2.svg";

import { Container } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Search({ title, ...rest }) {
  return (
    <Container>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {...rest} */}
    </Container>
  );
}
