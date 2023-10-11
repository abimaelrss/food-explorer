import { Container } from "./styles";

export function Input({ icon: Icon, changeSearch, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input onChange={(e) => changeSearch(e.target.value)} {...rest} />
    </Container>
  );
}
