import { Button } from "../Button";
import { Container, Render } from "./styles";

import { api } from "../../services/api";

import imageDish from "../../assets/mobile/Dish.png";

import imageMinus from "../../assets/icons/Minus.svg";
import imagePlus from "../../assets/icons/Plus.svg";

import { useAuth } from "../../hooks/auth";
import { ButtonIcon } from "../ButtonIcon";
import { useEffect, useState } from "react";

export function Dish({ data }) {
  const { user } = useAuth();

  const [count, setCount] = useState(1);

  // const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;
  // const [image, setImage] = useState(imageUrl);

  function countPlus() {
    setCount(count + 1);
  }

  function countMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <Container className="keen-slider__slide">
      <ButtonIcon title="icon" className="favorite" />

      <Render to={`/details/${data.id}`}>
        {/* <img src={imageDish} alt="" /> */}
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato" />
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </Render>

      <span>R$ {data.price}</span>

      {user.role !== "admin" && (
        <div className="step">
          <div className="stepper">
            <button onClick={countMinus}>
              <img src={imageMinus} alt="" />
            </button>
            {count < 10 && 0}
            {count}
            <button onClick={countPlus}>
              <img src={imagePlus} alt="" />
            </button>
          </div>
          <Button actived title="Incluir" />
        </div>
      )}
    </Container>
  );
}
