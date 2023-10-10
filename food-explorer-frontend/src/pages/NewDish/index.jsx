import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";
import imagePlaceholder from "../../assets/avatar_placeholder.svg";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import imageSelect from "../../assets/icons/UploadSimple.svg";
import { FiUpload } from "react-icons/fi";

import { Container, Content, Form } from "./styles";
import { IngredientItem } from "../../components/IngredientItem";

export function NewDish() {
  const [dish] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const imageUrl = dish.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : avatarPlaceholder;

  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNew() {
    // if (!image) {
    //   return alert("Informe a imagem!");
    // }

    if (!name) {
      return alert("Informe o nome!");
    }

    if (!selectedCategory) {
      return alert("Informe a categoria!");
    }

    if (!ingredients) {
      return alert("Informe os ingredientes!");
    }

    if (!price) {
      return alert("Informe oo preço!");
    }

    if (!description) {
      return alert("Informe a descrição!");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    const response = await api.post("/dishs", {
      name,
      description,
      category: selectedCategory,
      ingredients,
      price,
    });

    const dishId = response.data;

    try {
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);

        const response = await api.patch(`/dishs/image/${dishId}`, fileUploadForm);
        setImage(response.data.image);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o prato!");
      }
    }

    alert("Prato cadastrado com sucesso!");
    navigate(-1);
  }

  function hendleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  async function fetchCategories() {
    const response = await api.get(`/categories`);
    setCategories(response.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <ButtonText title="voltar" onClick={handleBack} />
          <h1>Novo prato</h1>

          <div className="inputGroup">
            <div className="inputWrapper">
              <label htmlFor="file-input">
                <span>Imagem do prato</span>
                <div className="uploadFile">
                  <img src={imageSelect} alt="" />
                  <img src={image} alt="" />
                  <span>Selecione a imagem</span>
                  <input
                    id="file-input"
                    type="file"
                    placeholder="Selecione a imagem"
                    onChange={hendleChangeImage}
                  />
                </div>
              </label>
            </div>

            <div className="inputWrapper">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inputWrapper">
              <label htmlFor="selectCategory">Categoria</label>
              <select
                value={selectedCategory}
                id="selectCategory"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Selecione</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="inputGroup">
            <div className="inputWrapper">
              <label htmlFor="">Ingredientes</label>
              <div className="tags">
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>
            <div className="inputGroup">
              <div className="inputWrapper">
                <label htmlFor="">Preço</label>
                <input
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label htmlFor="">Descrição</label>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="action">
            <Button
              color="alter"
              title="Salvar alterações"
              onClick={handleNew}
            />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
