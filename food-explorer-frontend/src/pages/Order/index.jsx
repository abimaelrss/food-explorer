import { useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";

export function Order() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" onClick={handleBack} />
          <main>
            <h2>Pedido</h2>
          </main>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
