import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import imageBrand from "../../assets/polygon1.svg";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  function handleSingIn() {
    if (!email) {
      return alert("Informe o email!");
    }

    if (!email || !password) {
      return alert("Informe a senha!");
    }

    signIn({ email, password });
  }

  return (
    <Container>
      <Background>
        <img src={imageBrand} alt="" />
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h1>Faça login</h1>

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Senha</label>

        <input
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSingIn}>Entrar</button>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
