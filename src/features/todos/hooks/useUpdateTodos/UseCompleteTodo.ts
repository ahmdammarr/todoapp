import { useMutation } from "@apollo/client"
import { todosGQL } from "features/todos/gql/todos"
import { completeTodQgl } from "features/todos/gql/updateTodo"
export const UseCompleteTodo = () => {
    const [completeTodoMutation, { loading, error }] = useMutation(completeTodQgl);

    console.log('mutationError', error,loading)
    const completeTodo = (id: string) => completeTodoMutation({
        variables: { id },
        refetchQueries: [todosGQL]

    })

    return {
        loading,
        error,
        completeTodo
    }
}