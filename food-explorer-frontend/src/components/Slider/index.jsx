import { useState } from "react";
import { Container } from "./styles";

import imageCaretLeft from "../../assets/icons/CaretLeft.svg";
import imageCaretRight from "../../assets/icons/CaretRight.svg";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export function Slider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 428px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 550px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 800px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
    slides: { perView: 2, spacing: 16 },
  });

  return (
    <Container className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      {instanceRef.current && (
        <>
          <button
            onClick={(event) =>
              event.stopPropagation() || instanceRef.current?.prev()
            }
            className="caretLeft"
          >
            <img src={imageCaretLeft} alt="" />
          </button>

          <button
            onClick={(event) =>
              event.stopPropagation() || instanceRef.current?.next()
            }
            className="caretRight"
          >
            <img src={imageCaretRight} alt="" />
          </button>
        </>
      )}
    </Container>
  );
}
