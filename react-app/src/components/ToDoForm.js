import React, {useState, useReducer} from 'react'
import { initialState, todoReducer} from "../reducers/reducer"


const TodoForm = () => {
    const [newToDoText, setNewToDoText] = useState()
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state)

    const handleChanges = e => {
        setNewToDoText( e.target.value)
    }
    return (
        <div>
            <h1>{state.todos.map(item => {
                return <div>{item.item}</div>
            })}</h1>
            <input
                type="text"
                name="NewToDoText"
                value={newToDoText}
                onChange={handleChanges}
                />
            <button
            onClick={() =>
                dispatch({type: 'ADD_TODO', payload: newToDoText})}>
                    ToDo             
            </button>
        </div>
    )
}

export default TodoForm