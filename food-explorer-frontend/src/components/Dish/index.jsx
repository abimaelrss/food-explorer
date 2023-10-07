import { Button } from "../Button";
import { Container, Render } from "./styles";

import imageDish from "../../assets/mobile/Dish.png";

import imageMinus from "../../assets/icons/Minus.svg";
import imagePlus from "../../assets/icons/Plus.svg";

import { useAuth } from "../../hooks/auth";
import { ButtonIcon } from "../ButtonIcon";
import { useEffect, useState } from "react";

export function Dish({ data }) {
  const { user } = useAuth();

  const [count, setCount] = useState(0);

  function countPlus() {
    setCount(count + 1);
  }

  function countMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Container className="keen-slider__slide">
      <ButtonIcon title="icon" className="favorite" />

      <Render to={`/details/${data.id}`}>
        <img src={imageDish} alt="" />
        {/* <img src={data.image} alt="Imagem do prato" /> */}
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
            {count}
            <button onClick={countPlus}>
              <img src={imagePlus} alt="" />
            </button>
          </div>
          <Button title="Incluir" />
        </div>
      )}
    </Container>
  );
}
