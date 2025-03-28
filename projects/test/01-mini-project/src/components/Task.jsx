export function Task({ tareas, eliminarTarea }) {
    return (
        <section className="task-list">
            {tareas.map((tarea, index) => (
                <div className="task-item" key={index}>
                    <span className="taskindex">{index + 1}</span>
                    <span className="task">{tarea}</span>
                    <button className="button-container" onClick={() => eliminarTarea(index)}>Eliminar</button>
                </div>
            ))}
        </section>
    );
}


