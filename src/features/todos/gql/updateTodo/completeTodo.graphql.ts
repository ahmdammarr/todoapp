import {gql} from '@apollo/client';

export const completeTodQgl = gql`
  mutation {
    updateTodo(input: {data: {status: Completed}}) {
      todo {
        id
        todo
        status
      }
    }
  }
`;
