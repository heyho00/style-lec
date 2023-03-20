import styled, { css } from "styled-components";
import { useBoolean } from "usehooks-ts";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  active?: boolean;
};

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <PrimaryButton type="submit" onClick={toggle} active={active}>
      On/Off
    </PrimaryButton>
  );
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? "button",
}))<ButtonProps>`
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

const PrimaryButton = styled(Button)`
  background: #eee;

  ${(props) =>
    props.active &&
    css`
      background: #f0f;
      color: yellow;
    `}
`;
