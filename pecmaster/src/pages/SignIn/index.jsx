import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  function handleSingIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Background>
        <img src="./assets/polygon1.png" alt="" />
        <h1>food explorer</h1>
      </Background>

      <Form>
        <h1>Faça login</h1>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSingIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
