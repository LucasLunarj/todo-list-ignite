import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 73.8rem;
  margin: auto;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const TaskInput = styled.input`
  color: ${(props) => props.theme["gray-300"]};
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 16px;
  border: none;
  border-radius: 8px;
  width: 63.8rem;

  &:focus {
    outline: 1px solid ${(props) => props.theme["gray-700"]};
  }
`;

export const CreateButton = styled.button`
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["blue-dark"]};

  font-weight: 700;

  border-radius: 8px;
  padding: 16px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["blue"]};
  }
`;
