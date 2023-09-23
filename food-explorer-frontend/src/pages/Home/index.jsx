import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import imageBanner from "../../assets/pngegg1.png";

import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Slider } from "../../components/Slider";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const [dishs, setDishs] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    async function fetchIngredients() {
      const response = await api.get("/ingredients");
      setTags(response.data);
    }

    fetchTags();
    fetchIngredients();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }

    async function fetchDishs() {
      const response = await api.get(
        `/dishs?name=${search}&ingredients=${tagsSelected}`
      );
      setDishs(response.data);
    }

    fetchNotes();
    fetchDishs();
  }, [tagsSelected, search]);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <div className="banner">
            <img src={imageBanner} alt="" />
            <Banner>
              <div className="sabores">
                <h2>Sabores inigualéveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </Banner>
          </div>

          <Section title="Refeições">
            {dishs.map((dish) => (
              <Dish
                key={String(dish.id)}
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))}
            <Slider>
              <Card />
              <Card />
              <Card />
              <Card />
            </Slider>
          </Section>
        </Content>
      </Container>

      <Footer />
    </>
  );
}
