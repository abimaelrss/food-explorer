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

export function Order() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" onClick={handleBack} />
          <main>
            <h2>Pedido</h2>
          </main>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
