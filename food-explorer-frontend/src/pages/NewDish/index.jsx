import { useState } from "react";

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

import imageSelect from "../../assets/icons/UploadSimple.svg";
import { FiUpload } from "react-icons/fi";

import { Container, Content, Form } from "./styles";

export function NewDish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota!");
    }

    if (newLink) {
      return alert(
        "Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

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
                  <span>Selecione a imagem</span>
                  <input
                    id="file-input"
                    type="file"
                    placeholder="Selecione a imagem"
                    // onChange={e => setImage(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className="inputWrapper">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                // onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Categoria</label>
              <select name="" id="">
                <option value="">Refeição</option>
              </select>
            </div>
          </div>

          <div className="inputGroup">
            <Section title="Ingredientes">
              <div className="tags">
                {links.map((link, index) => (
                  <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                ))}
                <NoteItem
                  isNew
                  placeholder="Adicionar"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  onClick={handleAddLink}
                />
              </div>
            </Section>
            <div className="inputGroup">
              <div className="inputWrapper">
                <label htmlFor="">Preço</label>
                <input
                  type="text"
                  placeholder="R$ 00,00"
                  // onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label htmlFor="">Descrição</label>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button title="Salvar alterações" onClick={handleNewNote} />
        </Form>
      </Content>

      <Footer />
    </Container>
  );
}
