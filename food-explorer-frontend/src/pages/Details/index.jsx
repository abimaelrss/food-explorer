import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import imageBanner from "../../assets/pngegg1.png";
import imageDish from "../../assets/prates/Dish.png";
import imagePlus from "../../assets/icons/Plus.svg";
import imageMinus from "../../assets/icons/Minus.svg";
import imageOrder from "../../assets/receipt.svg";

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
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth();
  const [count, setCount] = useState(1);

  const [data, setData] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function countPlus() {
    setCount(count + 1);
  }

  function countMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/dishs/${params.id}`);
      navigate(-1);
    }
  }

  async function fetchDish() {
    const response = await api.get(`/dishs/${params.id}`);
    setData(response.data);
  }

  useEffect(() => {
    fetchDish();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" onClick={handleBack} />
          {data && (
            <main>
              <img src={imageDish} alt="" />
              {/* <img src={data.image} alt="Imagem do prato" /> */}

              <div className="ingredient">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="ingredients">
                  {data.ingredients.map((ingredient) => (
                    <Ingredient
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))}
                </div>

                <div className="step">
                  {user.role != "admin" && (
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
                  )}
                    <Button
                      title={
                        user.role !== "admin" ? (
                          <>
                            <img src={imageOrder} alt="Imagem de pedido" />
                            pedir R$: {data.price}
                          </>
                        ) : (
                          "Editar prato"
                        )
                      }
                    />
                </div>
              </div>
            </main>
          )}
        </Content>
      </Container>

      <Footer />
    </>
  );
}
