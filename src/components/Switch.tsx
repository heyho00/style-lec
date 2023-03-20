import styled, { css } from "styled-components";
import { useBoolean } from "usehooks-ts";

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <Button type="button" onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}

const Button = styled.button<{ active: boolean }>`
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      background: #f00;
      color: yellow;
    `}
`;
