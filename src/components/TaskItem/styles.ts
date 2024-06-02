import styled from "styled-components";

export const Container = styled.div`
  max-width: 72.6rem;
  margin: auto;

  margin-bottom: 12px;
`;

export const Content = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;

  padding: 16px;

  p {
  }
  div {
    display: flex;
    gap: 12px;
    width: 80%;
    line-break: anywhere;
  }

  img {
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.danger};
    cursor: pointer;
  }
`;
