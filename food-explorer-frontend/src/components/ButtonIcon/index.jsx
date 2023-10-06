import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { FiHeart } from "react-icons/fi";

import imagePencil from "../../assets/icons/Pencil.svg";
import imageHeart from "../../assets/icons/Heart.svg";
// import { icons } from "react-icons";

export function ButtonIcon({ title, isActive = false, ...rest }) {
  const { user } = useAuth();

  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {user.role === "admin" && (
        // <img src={imagePencil} alt="" className="favorite" />
        <FiHeart />
      )}
      {user.role !== "admin" && (
        // <img src={imageHeart} alt="" className="favorite" />
        <FiHeart />
      )}
    </Container>
  );
}
