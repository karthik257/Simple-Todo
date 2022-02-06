import React,{useState} from 'react';
import TodoList from './TodoList';
import styles from "./todoitem.module.css"


function Todo() {

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const onInputChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const onAddClick = () => {
        setTodos([...todos,value])
    }


    return <div>
        <input type="text" placeholder='Write Something' onChange={onInputChange} value={value}/>
        <button className={styles.btn } onClick={onAddClick}>+</button>
        <TodoList todos={todos}/>
    </div>;
    
}

export default Todo;
