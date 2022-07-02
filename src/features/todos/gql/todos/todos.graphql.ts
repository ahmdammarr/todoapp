import { gql } from '@apollo/client'

export const todosGQL = gql`
{
    todos{
      data{
        id
        attributes{
          time
          todo
        }
      }
    }
  }
`