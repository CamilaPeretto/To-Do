import { CheckIcon, ChevronRight, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick}) {
    return (
        <ul className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2"> 
                    <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-fuchsia-900 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                    >
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>
                    <button className="bg-fuchsia-900 text-white p-2 rounded-md">
                        <ChevronRight />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)} className="bg-fuchsia-900 text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;