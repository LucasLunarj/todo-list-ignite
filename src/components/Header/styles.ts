import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["gray-700"]};
  height: 20rem;
  width: 100%;
  display: flex;
  position: absolute;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  span {
    font-size: 4rem;
    font-weight: 900;
  }

  span:nth-child(1) {
    color: ${(props) => props.theme.blue};
  }
  span:nth-child(2) {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
