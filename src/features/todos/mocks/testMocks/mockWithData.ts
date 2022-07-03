import { todosGQL } from "features/todos/gql/todos";

export const mockData = [
    {
      request: {
        query: todosGQL,
      },
      result: {
        data: 
          [
              {
                  "id": "14",
                  "todo": "mohamed ahmed",
                  "status": "Pending",
                  "created_at": "2022-07-03T19:47:30.068Z"
              },
              {
                  "id": "13",
                  "todo": "mohamed",
                  "status": "Pending",
                  "created_at": "2022-07-03T19:47:24.428Z"
              },
              {
                  "id": "12",
                  "todo": "ahmed",
                  "status": "Pending",
                  "created_at": "2022-07-03T19:47:15.992Z"
              }
          ]
        },
    },
  ];