export const initialState = {
    todos : [
        {
    item: "Learn about reducers",
    completed: false,
    id: new Date()
        }
    ]
}

export const todoReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { item: action.payload, completed: false, id: Date.now()}]
            }
        
            
                
                
             
    default:
        return state;
    }
}
