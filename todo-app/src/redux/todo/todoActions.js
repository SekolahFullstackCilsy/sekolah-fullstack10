export const getTodo = (data) => {
   return {
      type: "GET_TODO",
      data: data
   }
}

export const findTodo = (id) => {
   return {
      type: "FIND_TODO",
      id: id
   }
}

export const addTodo = (data) => {
   return {
      type: "ADD_TODO",
      data: data
   }
}

export const updateTodo = (data) => {
   return {
      type: "UPDATE_TODO",
      data: data
   }
}

export const deleteTodo = (data) => {
   return {
      type: "DELETE_TODO",
      data: data
   }
}