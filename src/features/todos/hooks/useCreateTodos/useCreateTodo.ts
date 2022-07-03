import { useMutation, useQuery } from "@apollo/client"
import { createTodQgl } from "features/todos/gql/createTodo/completeTodo.graphql"
import { todosGQL } from "features/todos/gql/todos"
import { completeTodQgl } from "features/todos/gql/updateTodo"
import { EFetchStatus } from "features/todos/models/enums/ETodo.enums/EFetchStatus.enum"
import { useState, useEffect } from "react"

export const UseCreateTodo = () => {
    const [createTodoMutation, { loading, error }] = useMutation(createTodQgl);

    console.log('mutationError', error)
    const createTodo = (id: string) => createTodoMutation({
        variables: { todo: 'todo from client' }
    })

    return {
        loading,
        createTodo
    }
}