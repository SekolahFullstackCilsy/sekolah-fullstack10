
import http from "http"
import { TodosService } from "./service.mjs"

const todosService = new TodosService();
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json")

  if (request.method === "GET") {
    todosService.getTodos(request, response)
  } else if (request.method === "POST") {
    todosService.createTodo(request, response)

  } else if (request.method === "DELETE") {
    todosService.deleteTodo(request, response)
  }
})

server.listen(8000)