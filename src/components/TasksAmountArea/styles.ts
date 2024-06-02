import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
  max-width: 73.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 2.4rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TasksCreatedArea = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme["blue"]};
  display: flex;
  gap: 8px;
`;
export const TasksFinished = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme["purple"]};
  display: flex;
  gap: 8px;
`;

export const AmountArea = styled.div`
  font-size: 12px;
  font-weight: 700;

  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["gray-400"]};
  padding: 0px 8px;
  border-radius: 999px;
`;
