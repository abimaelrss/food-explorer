import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";

import { Container, Brand, Search, Logout } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOu() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <img src={imageBrand} alt="" />
        <h1>food explorer</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Button title="Pedidos (0)" />

      <Logout onClick={handleSignOu}>
        <GoSignOut/>
      </Logout>
    </Container>
  );
}
