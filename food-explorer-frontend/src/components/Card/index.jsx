import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/dish.png";
import imageFavorite from "../../assets/favorite.svg";

export function Card({ title, children }) {
  return (
    <Container>
      <img src={imageFavorite} alt="" id="favorite"/>
      <img src={imageDish} alt="" />
      <h2>Torradas de Parma</h2>
      <h2>{title}</h2>
      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <p>R$ 25,97</p>
      <div className="quantity">
        <p>- 01 +</p>
        <Button title="incluir" />
      </div>
      {children}
    </Container>
  );
}
