import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
    


    return <div>
        <ul style={{ listStyle:'none' }}>
            {todos.map((element,index)=>{
                return (
                    <div key={index}>
                        <TodoItem element={element}/>
                        </div>
                )
            })}
        </ul>
  </div>;
}

export default TodoList;