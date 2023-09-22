import { useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import imageBrand from "../../assets/polygon1.svg";
import imageMenu1 from "../../assets/icons/Menu.svg";
import imageMenuClose from "../../assets/icons/Close.svg";

import { Container } from "./styles";
// import { Button } from "../Button";
import { Input } from "../Input";
import { Search } from "../Header/styles";
import { FiSearch } from "react-icons/fi";

export function MenuMobile({ visible, closeMenu }) {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container $visible={visible}>
      <header>
        <button className="buttonMenu" onClick={() => closeMenu(false)}>
          <img src={imageMenuClose} alt="Fechar menu" />
          <p>Menu</p>
        </button>
      </header>

      <main>
        <Search>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <button>Novo prato</button>
        <button onClick={handleSignOut}>Sair</button>
      </main>
    </Container>
  );
}
