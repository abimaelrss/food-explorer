import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import imageBanner from "../../assets/pngegg1.png";
import imageDish from "../../assets/prates/Dish.png";
import imagePlus from "../../assets/icons/Plus.svg";
import imageMinus from "../../assets/icons/Minus.svg";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Ingredient } from "../../components/Ingredient";

export function Dish() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/dishs/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dish/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" onclick={handleBack} />
          <main>
            <img src={imageDish} alt="" />
            <img src={data.image} alt="Imagem do prato" />

            <div className="ingredients">
              {/* <h2>{data.name}</h2> */}
              <p>
              {/* {data.description} */}
              </p>
              <div className="ingredients">

              {/* {data.ingredients.map(ingredient => (
                ))} */}

                <Ingredient title="alface" />
                <Ingredient title="cebola" />
                <Ingredient title="pão naan" />
                <Ingredient title="pepino" />
                <Ingredient title="rabanete" />
                <Ingredient title="tomate" />
              </div>

              <div className="step">
                <div className="stepper">
                  <img src={imageMinus} alt="" />
                  01
                  <img src={imagePlus} alt="" />
                </div>

                <Button title="Editar prato" />
              </div>
            </div>
          </main>
        </Content>
      </Container>
      
      <Footer />
    </>
  );
}
