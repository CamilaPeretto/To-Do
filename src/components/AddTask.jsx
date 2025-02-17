import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow flex flex-col">
            <input 
                type="text"  
                placeholder="Digite o título da tarefa" 
                className="border border-fuchsia-300 outline-fuchsia-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <input 
                type="text"  
                placeholder="Digite a descrição da tarefa" 
                className="border border-fuchsia-300 outline-fuchsia-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            
            <button 
                onClick={() => {
                    // Evita adicionar tarefas vazias
                    if (!title.trim() || !description.trim()) {
                        return alert ("Preencha o título e a descrição da tarefa!"); }
                    onAddTaskSubmit(title, description);
                    setTitle(""); 
                    setDescription("");
                }} 
                className="bg-fuchsia-600 text-white px-4 py-2 rounded-md font-bold"
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTasks;