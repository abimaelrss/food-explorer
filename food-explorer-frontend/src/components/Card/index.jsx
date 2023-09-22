import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/mobile/Dish.png";

import imagePencil from "../../assets/pencil.png";

export function Card({ title, children }) {
  return (
    <Container className="keen-slider__slide">
      <img src={imagePencil} alt="" className="favorite" />
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
