import { Container, Content } from "./styles";
import Clipboard from "../../assets/Clipboard.png";

export function EmptyTasks() {
  return (
    <Container>
      <Content>
        <img src={Clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </Content>
    </Container>
  );
}
