import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";
import imageMenu1 from "../../assets/icons/Menu.svg";
import imageMenu2 from "../../assets/icons/Close.svg";

import { Container } from "./styles";
// import { Button } from "../Button";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { Search } from "../Header/styles";

export function Menu() {
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
      <button className="btn1">
        <img src={imageMenu1} alt="" />
      </button>
      <button className="btn2">
        <img src={imageMenu2} alt="" />
      </button>
      <p>Menu</p>

      <Search />
    </Container>
  );
}
