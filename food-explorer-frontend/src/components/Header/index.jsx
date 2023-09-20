import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";
import imageMenu1 from "../../assets/icons/Menu.svg";
import imageMenu2 from "../../assets/icons/Close.svg";

import { Component, Container, Menu, Brand, Search, Button, Logout } from "./styles";
// import { Button } from "../Button";
// import { Menu } from "../Menu";
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
    <Component>
      <Container>
        <Menu>
          <button className="btn1">
            <img src={imageMenu1} alt="" />
          </button>
          <button className="btn2">
            <img src={imageMenu2} alt="" />
          </button>
          <p>Menu</p>

          <Search />
        </Menu>
        <Brand>
          <img src={imageBrand} alt="" />
          <h1>food explorer</h1>
          <p>admin</p>
        </Brand>

        <Search>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Button title="Novo prato">Novo prato</Button>

        <Logout onClick={handleSignOu}>
          <GoSignOut />
        </Logout>
      </Container>
    </Component>
  );
}
