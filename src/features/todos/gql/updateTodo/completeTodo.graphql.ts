import { gql } from '@apollo/client'

export const completeTodQgl = gql`
mutation($id:ID!){
    updateTodo(id: $id, data: { status:  Completed }){
    data{
      id
      attributes{
        todo
        status
      }
    }
    }
  }
`