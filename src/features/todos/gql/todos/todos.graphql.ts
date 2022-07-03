import { gql } from '@apollo/client'

export const todosGQL = gql`
{
  todos(where:{status:"Pending"} sort: "created_at:desc"){
    id
    todo
    status
    created_at
  }
}
`