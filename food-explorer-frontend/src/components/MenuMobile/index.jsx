import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import imageMenuClose from "../../assets/icons/Close.svg";

import { Container } from "./styles";
import { Search } from "../Search";

export function MenuMobile({ visible, closeMenu }) {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container $visible={visible}>
      <header>
        <button className="buttonMenu" onClick={() => closeMenu(false)}>
          <img src={imageMenuClose} alt="Fechar menu" />
          <p>Menu</p>
        </button>
      </header>

      <main>
        <Search />
        {user.role === "admin" && (
          <button onClick={() => navigation("/newDish")}>Novo prato</button>
        )}
        <button onClick={handleSignOut}>Sair</button>
      </main>
    </Container>
  );
}
