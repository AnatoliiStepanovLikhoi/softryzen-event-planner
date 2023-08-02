import styled from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 62px 16px 36px;
`;

export const LoaderText = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};
  font-size: 24px;
`;
