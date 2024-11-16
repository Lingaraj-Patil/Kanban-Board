export default function Task({ task,moveTask,removeTask}){
    return(
        <div className="p-4 transition-shadow border rounded-lg shadow-sm task bg-gray-50 hover:shadow-lg"> 
            <h3 className="font-semibold text-gray-800">{task.title}</h3>
            <p className="mb-4 text-sm text-gray-600">{task.description}</p>
            <div className="flex space-x-2 task-buttons">
                {task.status !=='todo' &&(
                    <button className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={()=> moveTask(task.id,'todo')}>To Do</button>
                )}
                {task.status !=='inProgress' &&(
                    <button className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600" onClick={()=> moveTask(task.id,'inProgress')}>In Progress</button>
                )}
                {task.status !=='done' &&(
                    <button  className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600" onClick={()=> moveTask(task.id,'done')}>Done</button>
                )}
                <button className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600" onClick={()=> removeTask(task.id)}>Delete</button>
            </div>
        </div>
    )
}