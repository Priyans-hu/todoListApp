import PendingTaskListItem from './PendingTaskListItem.js';

export default function PendingTasks({ todos, setTodos, handleDelete, handleStatus, editTask }) {
    return (
        <div>
            {todos.length > 0 ? (
                <ul className="list-group">
                    {todos.map((todo) => (
                        <PendingTaskListItem
                            key={todo.id}
                            taskname={todo.taskname}
                            id={todo.id}
                            editTask={editTask}
                            onDelete={handleDelete}
                            handleStatus={handleStatus}
                            status={todo.completed}
                        />
                    ))}
                </ul>
            ) : (
                <h2 className='text-white font-weight-light'>Nothing to show</h2>
            )}
        </div>
    );
}
