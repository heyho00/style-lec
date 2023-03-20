import styled, { css } from "styled-components";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  active?: boolean;
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? "button",
}))<ButtonProps>`
  background: #fff;
  color: #000;
  border: 1px solid ${(props) => (props.active ? "#f00" : "#888")};

  ${(props) =>
    props.active &&
    css`
      background: #00f;
      color: #fff;
    `}
`;

export default Button;
