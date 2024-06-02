import {
  AmountArea,
  Container,
  Content,
  TasksCreatedArea,
  TasksFinished,
} from "./styles";

interface TasksAmountProps {
  tasksAmount: number;
  completedAmount: number;
}

export function TasksAmountArea({
  tasksAmount,
  completedAmount,
}: TasksAmountProps) {
  return (
    <Container>
      <Content>
        <TasksCreatedArea>
          <p>Tarefas Criadas</p>
          <AmountArea>{tasksAmount}</AmountArea>
        </TasksCreatedArea>
        <TasksFinished>
          <p>Concluídas</p>
          <AmountArea>
            {completedAmount} de {tasksAmount}
          </AmountArea>
        </TasksFinished>
      </Content>
    </Container>
  );
}
