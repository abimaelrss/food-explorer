import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

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

export function AlterDish() {
  const [dish, setDish] = useState();

  // const imageUrl = dish.image
  //   ? `${api.defaults.baseURL}/files/${dish.image}`
  //   : avatarPlaceholder;

  // const [image, setImage] = useState(imageUrl);
  const [imageFile, setImageFile] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();

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

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/dishs/${params.id}`);
      navigate(-1);
    }
  }

  async function handleUpdate() {
    const updated = {
      name,
      category: selectedCategory,
      ingredients,
      price,
      description,
    };

    const dishUpdated = Object.assign(dish, updated);

    try {
      const id = await api.put(`/dishs/${params.id}`, updated);

      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);

        const response = await api.patch(`/dishs/image/${id}`, fileUploadForm);
        // dishUpdated.image = response.data.image;
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato!");
      }
    }
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

  async function fetchDish() {
    const response = await api.get(`/dishs/${params.id}`);
    setName(response.data.name);
    setSelectedCategory(response.data.category_id);
    setIngredients(response.data.ingredients);
    setPrice(response.data.price);
    setDescription(response.data.description);
  }

  useEffect(() => {
    fetchCategories();
    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <ButtonText title="voltar" onClick={handleBack} />
          <h1>Editar prato</h1>

          <div className="inputGroup">
            <div className="inputWrapper">
              <label htmlFor="#file-input">
                <span>Imagem do prato</span>
                <div className="uploadFile">
                  <img src={imageSelect} alt="" />
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
                value={name}
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
                    value={ingredient.name}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label htmlFor="">Descrição</label>
          <TextArea
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="action">
            <Button
              actived
              title="Excluir prato"
              onClick={handleRemove}
            />
            <Button
              actived
              title="Salvar alterações"
              onClick={handleUpdate}
            />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
