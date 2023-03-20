import styled, { css } from "styled-components";

import Button from "./Button";

const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme.colors.primary}
    ${(props) =>
      props.active &&
      css`
        background: ${props.theme.colors
          .primary}; // 이미 앞에 가져온 props 쓰는거
      `};
`;

export default PrimaryButton;
