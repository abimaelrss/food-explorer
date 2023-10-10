import { Container } from "./styles";

export function Button({ title, actived = false, children, handleClick, ...rest }) {
  return (
    <Container onClick={handleClick} type="button" $actived={actived} {...rest}>
      {/* disabled={actived} */}
      {children}
      {title}
    </Container>
  );
}
