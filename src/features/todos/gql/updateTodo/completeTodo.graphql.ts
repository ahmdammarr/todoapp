import {gql} from '@apollo/client';

export const completeTodQgl = gql`
mutation($id:ID!){
  updateTodo(input:{ where:{id:$id} data: {status: Completed}}) {
    todo {
      id
      todo
      status
    }
  }
}
`;
