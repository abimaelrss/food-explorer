import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Dish } from "../Dish";
import { Slider } from "../Slider";

export function Section({ data, title }) {
  const [dishs, setDishs] = useState([]);

  async function fetchDishs() {
    const response = await api.get(`/dishs?category_id=${data.id}`);
    setDishs(response.data);
  }

  useEffect(() => {
    fetchDishs();
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      {/* {dishs != 0 && (
        <Slider>
          {dishs.map((dish) => (
            <Dish key={String(dish.id)} data={dish} />
          ))}
        </Slider>
      )} */}

      {data != 0 && (
        <Slider>
          {data.map((dish) => (
            <Dish key={String(dish.id)} data={dish} />
          ))}
        </Slider>
      )}
    </Container>
  );
}
