import { Container } from "./styles";

export function Button({
  title,
  model = "DEFAULT",
  actived,
  children,
  handleClick,
  ...rest
}) {
  return (
    <Container
      onClick={handleClick}
      $actived={actived}
      type="button"
      $model={model}
      {...rest}
    >
      {children}
      {title}
    </Container>
  );
}
