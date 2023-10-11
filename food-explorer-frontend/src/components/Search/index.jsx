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
