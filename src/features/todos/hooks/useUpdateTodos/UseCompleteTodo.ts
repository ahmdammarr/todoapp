import { useMutation } from "@apollo/client"
import { todosGQL } from "features/todos/gql/todos"
import { completeTodQgl } from "features/todos/gql/updateTodo"
import { useState } from "react";
export const UseCompleteTodo = () => {
    const [completeTodoMutation, { loading, error }] = useMutation(completeTodQgl);

    const [selectedTodId, setselectedTodId] = useState('')
    const completeTodo = (id: string) => {
        setselectedTodId(id)
        completeTodoMutation({
            variables: { id },
            refetchQueries: [todosGQL]

        })
    }

    return {
        loading,
        error,
        selectedTodId,
        completeTodo
    }
}