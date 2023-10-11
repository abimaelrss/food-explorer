import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import imagePlus from "../../assets/icons/Plus.svg";
import imageMinus from "../../assets/icons/Minus.svg";
import imageOrder from "../../assets/receipt.svg";

import imagePlaceholder from "../../assets/image-dish-placeholder.png";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth();
  const [count, setCount] = useState(1);

  const [data, setData] = useState(null);

  // const imageUrl = data.image
  //   ? `${api.defaults.baseURL}/files/${data.image}`
  //   : imagePlaceholder;

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

  function handleUpdate(id) {
    navigate(`/alterDish/${id}`);
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
              {/* <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato" /> */}
              <img
                src={
                  data.image
                    ? `${api.defaults.baseURL}/files/${data.image}`
                    : imagePlaceholder
                }
                alt="Imagem do prato"
              />

              <div className="ingredient">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="ingredients">
                  {data.ingredients.map((ingredient, index) => (
                    <Ingredient key={String(index)} title={ingredient} />
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
                  {user.role === "admin" ? (
                    <Button
                      title="Editar prato"
                      onClick={() => handleUpdate(data.id)}
                    />
                  ) : (
                    <Button title={`pedir R$: ${data.price}`}>
                      <img src={imageOrder} alt="Imagem de pedido" />
                    </Button>
                  )}
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
