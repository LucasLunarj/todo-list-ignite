import { useState } from "react";
import { AddTaskArea } from "./components/AddTaskArea";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { TaskItem } from "./components/TaskItem";
import { TasksAmountArea } from "./components/TasksAmountArea";

interface TaskListProps {
  id?: string;
  tasksFinished?: boolean;
  taskName?: string;
}

export function App() {
  const [taskList, setTaskList] = useState<TaskListProps[]>([]);
  console.log(taskList.length);

  function handleCreateNewTask(newTask: string) {
    setTaskList([
      ...taskList,
      { id: crypto.randomUUID(), taskName: newTask, tasksFinished: true },
    ]);
  }

  function handleRemove(itemId: string) {
    const filteredList = taskList.filter((item) => {
      return itemId !== item.id;
    });
    setTaskList(filteredList);
  }

  function handleSelectFinished(itemId: string) {
    const updatedList: TaskListProps[] = taskList.map((item) => {
      if (item.id === itemId) {
        return { ...item, tasksFinished: !item.tasksFinished };
      } else {
        return item;
      }
    });
    setTaskList(updatedList);
  }
  const MarkedAsCompletedList = taskList.filter(
    (item) => item.tasksFinished === false
  );
  console.log(MarkedAsCompletedList.length);

  return (
    <div>
      <Header />
      <AddTaskArea createNewTask={handleCreateNewTask} />
      <TasksAmountArea
        tasksAmount={Number(taskList.length)}
        completedAmount={MarkedAsCompletedList.length}
      />
      {taskList.length === 0 && <EmptyTasks />}
      {taskList?.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id as string}
          taskName={item.taskName as string}
          taskFinished={item.tasksFinished as boolean}
          removeItem={handleRemove}
          selectFinished={handleSelectFinished}
        />
      ))}
    </div>
  );
}
