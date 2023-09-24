import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

export function Dish() {
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
    <>
      <Header />

      <Container>
        <Content>
          <ButtonText title="voltar" />
          <main>
            <img src={imageDish} alt="" />

            <div className="ingredients">
              <h2>Salada ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>
              <div className="ingredients">
                <Tag title="alface" />
                <Tag title="cebola" />
                <Tag title="pão naan" />
                <Tag title="pepino" />
                <Tag title="rabanete" />
                <Tag title="tomate" />
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
