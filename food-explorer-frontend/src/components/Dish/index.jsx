import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/mobile/Dish.png";
import imagePencil from "../../assets/icons/Pencil.svg";
import imageHeart from "../../assets/icons/Heart.svg";
import imageMinus from "../../assets/icons/Minus.svg";
import imagePlus from "../../assets/icons/Plus.svg";

import { useAuth } from "../../hooks/auth";

export function Dish({ data }) {
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
      {/* <img src={data.image} alt="Imagem do prato" /> */}
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <span>R$ {data.price}</span>

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
