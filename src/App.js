import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListBody from './components/ListBody.js';

function App() {
    const [todos, setTodos] = useState([
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
            <ListBody todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleStatus={handleStatus} addTask={handleAddTask}/>
        </div>
    );
}

export default App;
