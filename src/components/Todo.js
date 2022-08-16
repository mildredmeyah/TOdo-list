import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {Table}from 'bootstrap'
import { ListItem,ListItemAvatar,ListItemText,List } from '@mui/material';
import { color } from '@mui/system';



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
   
    <div

      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} id="display"
    >
    <h2  style={{border:"1px solid brown",width:"1000px",marginLeft:"200px"}}>{todo.text}
      <div style={{border:"red"}}  key={todo.id} onClick={() => completeTodo(todo.id)} ></div>

    
    
        
      
   
      
      <div className='icons'>
        <RiCloseCircleLine style={{marginLeft:"200px"}}
          onClick={() => removeTodo(todo.id)}
          className='delete'
        />
        <TiEdit style={{marginLeft:"200px", marginBottom:"50px"}}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit'
        />
          
      </div>
      </h2>
    </div>
 
  ));
};

export default Todo;
