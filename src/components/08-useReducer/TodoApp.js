import React, { useReducer, useEffect } from 'react';
import './styles.css'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

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


  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action)
    reset()
  }

  return (
    <div>
      <h1>TODO App ({todos.length})</h1>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {
              todos.map((todo, index) => (
                <li key={todo.id} className='list-group-item'>
                  <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToggle(todo.id)}
                  >{index + 1}. {todo.desc}</p>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(todo.id)}
                  >
                    Borrar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr/>
          <form className='d-grid' onSubmit={handleSubmit}>
            <input
              type='text'
              value={description}
              name="description"
              placeholder='Aprender...'
              autoComplete='off'
              className='form-control'
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn btn-outline-primary mt-1'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
