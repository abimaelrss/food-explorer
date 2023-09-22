import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";
import imageMenuOpen from "../../assets/icons/Menu.svg";
import imageMenuClose from "../../assets/icons/Close.svg";

import { Component, Container, Brand, Search, Button, Logout } from "./styles";
// import { Button } from "../Button";
import { Input } from "../Input";
// import { Search } from "../Search";
import { FiSearch } from "react-icons/fi";
import { MenuMobile } from "../MenuMobile";
import { useEffect, useState } from "react";

export function Header() {
  const { signOut, user } = useAuth();
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

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
        <button
          className="imageMenuMobile"
          onClick={() => setIsVisibleMenu(true)}
        >
          <img src={imageMenuOpen} alt="Fechar menu" />
        </button>

        <MenuMobile visible={isVisibleMenu} closeMenu={setIsVisibleMenu} />

        <Brand>
          <img src={imageBrand} alt="" />
          <h1>food explorer</h1>
          <p>admin</p>
        </Brand>

        <div className="searchContainer">
          <Search>
            <Input
              placeholder="Busque por pratos ou ingredientes"
              icon={FiSearch}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
        </div>

        <Button title="Novo prato">Novo prato</Button>

        <Logout onClick={handleSignOu}>
          <GoSignOut />
        </Logout>
      </Container>
    </Component>
  );
}
