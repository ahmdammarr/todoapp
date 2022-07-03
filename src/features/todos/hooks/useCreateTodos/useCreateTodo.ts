import { useMutation } from "@apollo/client"
import { createTodQgl } from "features/todos/gql/createTodo/completeTodo.graphql"
import { todosGQL } from "features/todos/gql/todos"
export const UseCreateTodo = () => {
    const [createTodoMutation, { loading, error }] = useMutation(createTodQgl);

   
    const createTodo = (todo: string) => createTodoMutation({
        variables: { todo },
        refetchQueries:[todosGQL]
    })

    return {
        loading,
        error,
        createTodo
    }
}