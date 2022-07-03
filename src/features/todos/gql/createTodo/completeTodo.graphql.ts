import {gql} from '@apollo/client';

export const createTodQgl = gql`
  mutation ($todo: String!) {
    createTodo(input: {data: {todo: $todo}}) {
      todo {
        id
        todo
        status
      }
    }
  }
`;
