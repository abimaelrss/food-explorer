import { Container } from "./styles";
import imageButton from "../../assets/receipt.svg";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      <img src={imageButton} alt="" />
      {loading ? "Carregando..." : title}
    </Container>
  );
}
