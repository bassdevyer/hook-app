import React, { useReducer, useEffect } from 'react';
import './styles.css'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const handleDelete = (todoId) => {
    // Crear la accion
    // Hacer el dispatch
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId })
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  return (
    <div>
      <h1>TODO App ({todos.length})</h1>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          {/*TodoList, todos, handleDelete, handleToggle*/}
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
