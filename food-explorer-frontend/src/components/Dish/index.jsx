import { Button } from "../Button";
import { Container } from "./styles";

import imageDish from "../../assets/mobile/Dish.png";

import imageMinus from "../../assets/icons/Minus.svg";
import imagePlus from "../../assets/icons/Plus.svg";

import { useAuth } from "../../hooks/auth";
import { ButtonIcon } from "../ButtonIcon";
import { useNavigate } from "react-router-dom";

export function Dish({ data }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <Container
      className="keen-slider__slide"
      onClick={() => navigate(`/details/${data.id}`)}
    >
      <ButtonIcon title="icon" className="favorite" />

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
