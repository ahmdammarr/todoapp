import { todosGQL } from "features/todos/gql/todos";

export const mockError = [
    {
      request: {
        query: todosGQL,
      },
      error: new Error("An error occurred"),
    },
  ];