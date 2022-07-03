import { useMutation, useQuery } from "@apollo/client"
import { todosGQL } from "features/todos/gql/todos"
import { completeTodQgl } from "features/todos/gql/updateTodo"
import { EFetchStatus } from "features/todos/models/enums/ETodo.enums/EFetchStatus.enum"
import { useState, useEffect } from "react"

export const UseCompleteTodo = () => {
    const [completeTodoMutation, { loading, error }] = useMutation(completeTodQgl);

    console.log('mutationError',error )
    const completeTodo = (id: string) => completeTodoMutation({
        variables: { id:id }
    })

    return {
        loading,
        error,
        completeTodo
    }
}