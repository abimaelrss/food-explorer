import { useState, useEffect } from "react";

import imageBanner from "../../assets/pngegg1.png";

import { api } from "../../services/api";

import { Container, Content, Banner, Search } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Home() {
  const [search, setSearch] = useState("");

  const [dishs, setDishs] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const response = await api.get(`/categories`);
    setCategories(response.data);
  }

  async function fetchDishs() {
    const response = await api.get(
      `/dishs?name=${search}&ingredients=${search}`
    );
    setDishs(response.data);
  }

  useEffect(() => {
    fetchCategories();
    fetchDishs();
  }, [search]);

  return (
    <>
      <Header />

      {/* <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search> */}

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

          {/* {categories.map((categorie) => (
            <Section
              title={categorie.name}
              key={String(categorie.id)}
              data={categorie}
              // onClick={() => handleDetails(categorie.id)}
            />
          ))} */}

          {dishs.map((dish) => (
            <Section
              title={dish.name}
              key={String(dish.id)}
              data={dish.dishs}
              // onClick={() => handleDetails(categorie.id)}
            />
          ))}
        </Content>
      </Container>

      <Footer />
    </>
  );
}
