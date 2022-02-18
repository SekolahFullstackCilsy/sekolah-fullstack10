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
            todos: action.data // karena yang diberikan bentuk array object list banyak
         }
      case "FIND_TODO":
         const findTodo = state.todos.find(todo => todo.id === action.id);
         return {
            ...state,
            todo: findTodo
         }
      case "ADD_TODO":
         return {
            ...state,
            todos: [...state.todos, action.data] // data yang diberikan single object
         }
      case "DELETE_TODO":
         const deletedTodo = state.todos.filter(todo => todo.item !== action.data.id);
         return {
            ...state,
            todos: deletedTodo
         }
      case "UPDATE_TODO":
         const updatedTodo = state.todos.map(todo => {
            if (todo.id === action.data.id) {
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