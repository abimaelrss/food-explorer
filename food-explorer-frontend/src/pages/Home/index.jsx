import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {  FiSearch } from 'react-icons/fi';


import imageBanner from "../../assets/pngegg1.png";

import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Dish } from "../../components/Dish";
import { Search } from "../../components/Search";
import { Input } from "../../components/Input";

export function Home() {
  const [search, setSearch] = useState("");

  const [dishs, setDishs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    console.log(id);
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchCategories() {
      // const response = await api.get(`/categories`);
      const response = await api.get(`/categories?name=${search}`);
      setCategories(response.data);
    }

    async function fetchDishs() {
      const response = await api.get(`/dishs?name=${search}&ingredients=${search}`);
      setDishs(response.data);
    }

    fetchCategories();
    // fetchDishs();
  }, [search]);

  return (
    <>
      <Header />

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

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
