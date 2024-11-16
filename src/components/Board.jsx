export default function Board({children}){
    return(
        <div className="grid grid-cols-1 gap-6 board-container md:grid-cols-3">
            {children}
        </div>
    )
}