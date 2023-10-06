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
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth();

  const [dishs, setDishs] = useState([]);
  const [ingredients, setIngredients] = useState([]);

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

  async function fetchDish() {
    const response = await api.get(`/dishs/${params.id}`);
    setDishs(response.data);
  }

  async function fetchIngredients() {
    const response = await api.get(`/ingredients/${params.id}`);
    setIngredients(response.data);
  }

  useEffect(() => {
    fetchDish();
    fetchIngredients();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" onClick={handleBack} />
          <main>
            <img src={imageDish} alt="" />
            {/* <img src={data.image} alt="Imagem do prato" /> */}

            <div className="ingredient">
              <h2>{dishs.name}</h2>
              <p>{dishs.description}</p>
              <div className="ingredients">
                {ingredients.map((ingredient) => (
                  <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.name}
                  />
                ))}
              </div>

              <div className="step">
                {user.role != "admin" && (
                  <div className="stepper">
                    <img src={imageMinus} alt="" />
                    01
                    <img src={imagePlus} alt="" />
                  </div>
                )}
                <div>
                  <Button title="Editar prato" />
                </div>
              </div>
            </div>
          </main>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
