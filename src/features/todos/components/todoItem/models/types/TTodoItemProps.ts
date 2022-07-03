import { ApolloError } from "@apollo/client"
import { EStatus } from "features/todos/models/enums/ETodo.enums/EStatus.enum"

export type TTodoItemProps ={
    todo:string
    time:Date
    status: EStatus
    onItemPressed:()=>void
    loading?:boolean
    error?:ApolloError
}