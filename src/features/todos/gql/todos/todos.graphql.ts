import { gql } from '@apollo/client'

export const todosGQL = gql`
{
  todos{
    id
    todo
    status
    created_at
  }
}
`