import { useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar Programação", description: "Estudar programação para se tornar um dev front-end.", isCompleted: false },
    { id: 2, title: "Estudar Inglês", description: "Estudar para se tornar fluente.", isCompleted: false },
    { id: 3, title: "Ler meu livro", description: "Ler meu livro para ter criatividade", isCompleted: false }
  ]);

  function onTaskClick(taskId) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
  }

  function onDeleteTaskClick(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1, // Garante um ID único
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-fuchsia-950 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-6">Gerenciador de Tarefas</h1>
        {/* Passando a função corretamente */}
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;

