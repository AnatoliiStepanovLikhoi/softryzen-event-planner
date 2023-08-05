import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  padding: 10px 24px;

  background-color: ${(props) => props.theme.colors.button.default};
  color: ${(props) => props.theme.colors.button.title};
  border-radius: 8px;
`;
