import { useQuery } from "@apollo/client"
import { todosGQL } from "features/todos/gql/todos"
import { EFetchStatus } from "features/todos/models/enums/ETodo.enums/EFetchStatus.enum"
import { useState, useEffect } from "react"

export const useFetchTodos = () => {
    const { error, data, loading } = useQuery(todosGQL)
    const [fetchStatus, setFetchStatus] = useState(EFetchStatus.loading)
    useEffect(() => {
        if (error) setFetchStatus(EFetchStatus.error)
        if (data) setFetchStatus(EFetchStatus.done)
    }, [error, data])

    return {
        fetchStatus,
        todos: data?.todos
    }
}