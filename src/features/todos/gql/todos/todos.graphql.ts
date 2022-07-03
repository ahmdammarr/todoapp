import { gql } from '@apollo/client'

export const todosGQL = gql`
{
  todos(where:{status:"Pending"}){
    id
    todo
    created_at
  }
}
`