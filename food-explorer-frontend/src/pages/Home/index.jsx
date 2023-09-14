import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import imageBanner from "../../assets/mask-group.png";
import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

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

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Header />

      <Content>
        <Banner>
          <img src={imageBanner} alt="" />
          <div className="sabores">
            <h2>Sabores inigualéveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Section title="Refeições">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Section>
        
        <Section title="Sobremesas">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Section>

        <Section title="Bebidas">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
