import axios from "axios";
import { TodoModel } from "types/types";

const baseUrl = "https://api.fake.rest/a367bf78-22b8-4ac4-8c66-05433a415c6e";

interface GetTodosResponse {
  result: boolean;
  data: TodoModel[];
}

export async function loadApiTodos(): Promise<TodoModel[]> {
  const response = await axios.get<GetTodosResponse>(`${baseUrl}/getTodos`);
  return response.data.data;
}

// export async function writeTodos(todos: TodoModel[]) {
//   await axios.put<TodoModel[]>(baseUrl + window.location.pathname, todos, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   });
// }
