import { defineEventHandler, readBody } from "h3";

const todoes = [
  {
    id: 1,
    title: "Sample Todo",
    description: "This is a sample todo",
    isCompleted: false,
    createdAt: new Date().toISOString()
  }
];

export default defineEventHandler (async (event) => {
  const { req, res } = event;

  // Get all todoes
  if (req.method === "GET") {
    return { success: true, data: todoes, statusCode: 201 };
  }

  // Add new todo
  if (req.method === "POST") {
    const newTodo = await readBody(event);
    todoes.push(newTodo);
    return {
      success: true,
      data: newTodo,
      statusCode: 201,
    }
  }

  // Update todo
  if (req.method === 'PUT') {
    const updatedTodo = await readBody(event);
    const todoIndex = todoes.findIndex((todo) => todo.id === updatedTodo.id);

    if (todoIndex !== -1) {
      todoes[todoIndex] = updatedTodo;

      return {
        value: updatedTodo,
        statusCode: 201,
      };
    }
    return {
      statusCode: 404,
    }
  }

  // Delete todo
  if (req.method === 'DELETE') {
    const { id } = await readBody(event);
    const todoIndex = todoes.findIndex((todo) => todo.id === id );

    if (todoIndex !== -1) {
      todoes.splice(todoIndex, 1);
      return {
        success: true,
        statusCode: 204
      };
    }
  }

  return { error: 'Invalid method' };
});