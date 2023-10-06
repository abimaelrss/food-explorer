import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import imageBanner from "../../assets/pngegg1.png";

import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const [dishs, setDishs] = useState([]);
  const [categories, setCategories] = useState([]);
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
    console.log(id);
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get(`/categories`);
      setCategories(response.data);
    }

    fetchCategories();
  }, []);

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

          {categories.map((categorie) => (
            <Section
              title={categorie.name}
              key={String(categorie.id)}
              data={categorie}
              onClick={() => handleDetails(categorie.id)}

            />
          ))}
        </Content>
      </Container>

      <Footer />
    </>
  );
}
