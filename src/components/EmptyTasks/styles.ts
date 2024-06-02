import styled from "styled-components";

export const Container = styled.div`
  max-width: 73.6rem;

  padding-top: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;

  img {
    width: 56px;
    height: 56px;
    margin: auto;
    margin-bottom: 16px;
  }

  p {
    color: ${(props) => props.theme["gray-300"]};
    font-weight: 700;
  }
  span {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
