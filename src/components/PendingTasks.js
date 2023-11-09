import PendingTaskListItem from './PendingTaskListItem.js';

export default function PendingTasks({ todos, setTodos, handleDelete, handleStatus}) {
    return (
        <div className=''>
            <ul className="list-group">
                {todos.map(todo => (
                    <PendingTaskListItem 
                        key={todo.id} 
                        taskname={todo.taskname} 
                        id={todo.id} 
                        onDelete={handleDelete}
                        handleStatus={handleStatus}
                        status={todo.completed}
                    />
                ))}
            </ul>
        </div>
    );
};
