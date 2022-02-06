import React,{useState} from 'react';
import styles from "./todoitem.module.css"

function TodoItem({ element }) {
    
    const [isStriked, setIsStriked] = useState(false);


    return <div>
        <li >
            <span className={isStriked?styles.strike:styles.normal }>{element}</span>
            <input className={styles.rounded} type="checkbox" onChange={() => {setIsStriked(!isStriked) }}/>
        </li>
  </div>;
}

export default TodoItem;

