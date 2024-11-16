import { useState } from "react"

export default function TaskForm({addTask}){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            status: 'todo'
        }
        addTask(newTask)
        setTitle('')
        setDescription('')
    }

    return(
        <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded-lg shadow-md task-form">
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"/>
            <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
            <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Add Task</button>
        </form>
    )
}