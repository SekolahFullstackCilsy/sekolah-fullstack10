
export class TodosService {
  todos = [
    {id: 1, todo: 'Ngoding malam'}
  ]

  getJsonTodos() {
    return JSON.stringify({
      code: 200,
      status: "Ok",
      data: this.todos
    })
  }

  getTodos(request, response) {
    response.write(this.getJsonTodos())
    response.end()
  }

  createTodo(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString())
      this.todos.push({
        id: this.todos.length + 1,
        todo: body.todo
      })

      response.write(this.getJsonTodos())
      response.end()
    })
  }

  deleteTodo(request, response) {
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString())
      if (body.id) {
        this.todos = this.todos.filter((todo) => todo.id !== body.id)
        response.write(this.getJsonTodos())
        response.end()
      }
    })

  }
}