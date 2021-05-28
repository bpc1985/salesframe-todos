import axios from "axios";
import { TodoModel } from "types/types";

const baseUrl: string =
  "https://api.fake.rest/a367bf78-22b8-4ac4-8c66-05433a415c6e";

const headers = {
  headers: { "Content-Type": "application/json" },
};

interface TodosResponse {
  result: boolean;
  data: TodoModel[];
}

export async function loadApiTodos(): Promise<TodoModel[]> {
  const response = await axios.get<TodosResponse>(`${baseUrl}/getTodos`);
  return response.data.data;
}

export async function addApiTodo(data: TodoModel): Promise<TodoModel[]> {
  const response = await axios.post<TodosResponse>(
    `${baseUrl}/addTodo`,
    data,
    headers
  );
  return response.data.data;
}

export async function updateApiTodo(data: TodoModel): Promise<TodoModel[]> {
  const response = await axios.post<TodosResponse>(
    `${baseUrl}/editTodo`,
    data,
    headers
  );
  return response.data.data;
}

export async function deleteApiTodo(id: string): Promise<TodoModel[]> {
  const response = await axios.post<TodosResponse>(
    `${baseUrl}/deleteTodo`,
    { id },
    headers
  );
  return response.data.data;
}
