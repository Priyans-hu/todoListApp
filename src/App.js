import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListBody from './components/ListBody.js';

function App() {
    const [todos, setTodos] = useState([
        { id: 4, taskname: 'Convert weather app into react code', completed: false },
        { id: 2, taskname: 'Go to gym', completed: false },
        { id: 1, taskname: 'Learn React', completed: true },
        { id: 3, taskname: 'Get milk and oranges', completed: false },
    ]);

    const handleAddTask = (task) => {
        console.log(task);
        const taskId = Math.floor(Math.random() * 10000 + 1);
        const newTodo = {id: taskId, taskname: task, completed: false};
        setTodos([...todos, newTodo]);
    }

    const editTask = (id, newTaskname) => {
        setTodos(todos.map(
            todo => todo.id === id ?
                {...todo, taskname: newTaskname} :
            todo
            )
        );
    }

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    };

    const handleStatus = (id) => {
        setTodos(todos.map(
            todo => todo.id === id ?
                { ...todo, completed: !todo.completed } :
                todo
            )
        );
    }

    return (
        <div className="App container-fluid">
            <Navbar />
            <ListBody 
                todos={todos} 
                setTodos={setTodos} 
                addTask={handleAddTask}
                editTask={editTask}
                handleDelete={handleDelete} 
                handleStatus={handleStatus} 
            />
        </div>
    );
}

export default App;
