import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/mobile/Dish.png";
import imagePencil from "../../assets/icons/Pencil.svg";
import imageHeart from "../../assets/icons/Heart.svg";
import imageMinus from "../../assets/icons/Minus.svg";
import imagePlus from "../../assets/icons/Plus.svg";

import { useAuth } from "../../hooks/auth";

export function Card({ title }) {
  const { user } = useAuth();

  return (
    <Container className="keen-slider__slide">
      {user.role === "admin" && (
        <img src={imagePencil} alt="" className="favorite" />
      )}
      {user.role !== "admin" && (
        <img src={imageHeart} alt="" className="favorite" />
      )}

      <img src={imageDish} alt="" />
      <h2>Salada ravanello </h2>
      <h2>{title}</h2>
      <p>Massa fresca com camarão</p>
      <span>R$ 25,97</span>

      {user.role !== "admin" && (
        <div className="step">
          <div className="stepper">
            <img src={imageMinus} alt="" />
            01
            <img src={imagePlus} alt="" />
          </div>

          <Button title="Incluir" />
        </div>
      )}
    </Container>
  );
}
