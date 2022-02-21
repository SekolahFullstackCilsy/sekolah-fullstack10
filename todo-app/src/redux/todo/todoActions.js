export const getTodo = () => {
   return {
      type: "GET_TODO",
      data: [
         {
            id: Math.random(), //1
            name: "Makan",
            description: "description for makan"
         },
         {
            id: Math.random(), //2
            name: "Minum",
            description: "description for minum"
         },
         {
            id: Math.random(), //3
            name: "Mandi",
            description: "description for mandi"
         }
      ]
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

export const deleteTodo = (id) => {
   return {
      type: "DELETE_TODO",
      id: id
   }
}