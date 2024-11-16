export default function Column({title,children}){
    return(
        <div className="p-4 bg-white rounded-lg shadow-md column">
            <h2 className="mb-4 text-lg font-bold text-gray-800">{title}</h2>
            <div className="space-y-4 tasks-container">
                {children}
            </div>
        </div>
    )
}