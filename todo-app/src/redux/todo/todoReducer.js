const initialState = {
   todos: [],
   todo: {
      id: 0,
      name: "",
      description: ""
   }
}

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case "GET_TODO":
         return {
            ...state,
            todos: action.data
         }
      case "FIND_TODO":
         const findTodo = state.todos.find(todo => String(todo.id) === String(action.id));
         return {
            ...state,
            todo: findTodo
         }
      case "ADD_TODO":
         const insertData = { ...action.data, id: Math.random() }
         return {
            ...state,
            todos: [...state.todos, insertData]
         }
      case "DELETE_TODO":
         const deletedTodo = state.todos.filter(todo => String(todo.id) !== String(action.id));
         return {
            ...state,
            todos: deletedTodo
         }
      case "UPDATE_TODO":
         const updatedTodo = state.todos.map(todo => {
            if (String(todo.id) === String(action.data.id)) {
               return action.data;
            }
            return todo;
         });
         return {
            ...state,
            todos: updatedTodo
         }
      default:
         return state
   }
}

export default todoReducer;