import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";

import theme from "../../styles/theme";

import imagePencil from "../../assets/icons/Pencil.svg";
import imageHeart from "../../assets/icons/Heart.svg";

import HeartIcon from "../HeartIcon";

import { useEffect, useState } from "react";
// import { icons } from "react-icons";

export function ButtonIcon({ title, color, isActive = false, ...rest }) {
  const { user } = useAuth();

  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  useEffect(() => {
    if (liked) {
      setLiked(true);
    }
  }, [liked]);

  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {user.role === "admin" && (
        <img src={imagePencil} alt="" className="favorite" />
      )}
      {user.role !== "admin" && (
        <>
          <button
            className={`button-like ${liked ? "liked" : ""}`}
            onClick={handleClick}
          >
            {
              // liked ? <HeartIcon /> : <FiHeart />
              liked ? <FcLike /> : <FiHeart />
              // <img src={imageHeart} alt="" className="favorite" />
            }
          </button>
        </>
      )}
    </Container>
  );
}
