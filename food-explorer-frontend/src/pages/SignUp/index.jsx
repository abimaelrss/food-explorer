import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import imageBrand from "../../assets/polygon1.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

  return (
    <Container>
      <Background>
        <img src={imageBrand} alt="" />
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h1>Crie sua conta</h1>

        <label htmlFor="">Seu nome</label>
        <input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Senha</label>
        <input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
