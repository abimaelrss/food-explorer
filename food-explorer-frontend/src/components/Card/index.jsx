import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/mobile/dish.png";
import imageFavorite from "../../assets/favorite.svg";
import imagePencil from "../../assets/pencil.png";

export function Card({ title, children }) {
  return (
    <Container>
      <img src={imagePencil} alt="" className="favorite"/>
      <img src={imageDish} alt="" />
      <h2>Salada ravanello </h2>
      <h2>{title}</h2>
      <p>Massa fresca com camarão</p>
      <span>R$ 25,97</span>
      {/* <div className="quantity">
        <p>- 01 +</p>
        <Button title="incluir" />
      </div> */}
      {children}
    </Container>
  );
}
