import { Container } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Search({ changeSearch }) {
  return (
    <Container>
      <Input changeSearch={changeSearch}
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
      />
    </Container>
  );
}
