import { Container } from "./styles";

export function ButtonCard({ title, actived = false, ...rest }) {
  return (
    <Container type="button" $actived={actived} disabled={actived} {...rest}>
      {title}
    </Container>
  );
}
