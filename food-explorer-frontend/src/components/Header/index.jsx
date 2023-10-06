import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";
import imageMenuOpen from "../../assets/icons/Menu.svg";
import imageMenuClose from "../../assets/icons/Close.svg";
import imageButton from "../../assets/receipt.svg";
import imageOrder from "../../assets/receipt.svg";

import { Component, Container, Brand, Order, Button, Logout } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { MenuMobile } from "../MenuMobile";
import { Search } from "../Search";
import { useEffect, useState } from "react";

export function Header() {
  const { signOut, user } = useAuth();
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const navigation = useNavigate();

  function handleSignOut() {
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
          {user.role === "admin" && <p>admin</p>}
        </Brand>

        <Order onClick={() => navigation("/order")}>
          {user.role !== "admin" && (
            <>
              <span>{0}</span>
              <img src={imageOrder} alt="Imagem de pedido" />
            </>
          )}
        </Order>

        <div className="searchContainer">
          <Search />
        </div>

        {user.role === "admin" && (
          <Button onClick={() => navigation("/newDish")}>
            <>Novo prato</>
          </Button>
        )}

        {user.role === "customer" && (
          <Button onClick={() => navigation("/order")}>
            <>
              <img src={imageOrder} alt="Imagem de pedido" />
              Pedidos
              <span>{`(0)`}</span>
            </>
          </Button>
        )}

        <Logout onClick={handleSignOut}>
          <GoSignOut />
        </Logout>
      </Container>
    </Component>
  );
}
