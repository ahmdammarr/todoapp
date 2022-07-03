import { gql } from '@apollo/client'

export const createTodQgl = gql`
mutation($todo:String!){
  createTodo(data: { todo:$todo }){
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