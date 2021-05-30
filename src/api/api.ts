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

interface AddTodoResponse {
  result: boolean;
  data: TodoModel;
}

export async function loadApiTodos(): Promise<TodoModel[]> {
  const response = await axios.get<TodosResponse>(`${baseUrl}/getTodos`);
  return response.data.data;
}

export async function addApiTodo(text: string): Promise<TodoModel> {
  const response = await axios.post<AddTodoResponse>(
    `${baseUrl}/addTodo`,
    { text },
    headers
  );
  return response.data.data;
}

export async function updateApiTodo(
  updatedTodo: TodoModel
): Promise<TodoModel[]> {
  const response = await axios.post<TodosResponse>(
    `${baseUrl}/editTodo`,
    updatedTodo,
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
