import { Container, Content, CreateButton, TaskInput } from "./styles";
import plusIcon from "../../assets/plusIcon.svg";
import { useState } from "react";

interface AddTaskprops {
  createNewTask: (task: string) => void;
}

export function AddTaskArea({ createNewTask }: AddTaskprops) {
  const [task, setTask] = useState<string>("");

  function handleCreate() {
    createNewTask(task);
    setTask("");
  }

  return (
    <Container>
      <Content>
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <CreateButton
          disabled={task.length == 0}
          onClick={() => handleCreate()}
        >
          Criar <img src={plusIcon} alt="" />
        </CreateButton>
      </Content>
    </Container>
  );
}
