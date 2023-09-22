import { Container } from "./styles";
import { Tag } from "../Tag";
import { Ingredient } from "../Ingredient";

export function Dish({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {
        data.ingredients &&
        <footer>
          {
            data.ingredients.map(ingredient => <Ingredient key={ingredient.id} title={ingredient.name} />)
          }
        </footer>
      }
    </Container>
  );
}