import { Container } from "./styles";
import { PiCaretLeft } from "react-icons/pi";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      <PiCaretLeft/>
      {title}
    </Container>
  )
}