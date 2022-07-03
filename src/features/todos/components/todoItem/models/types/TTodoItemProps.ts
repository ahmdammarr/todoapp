import { ApolloError } from "@apollo/client"

export type TTodoItemProps ={
    todo:string
    time:Date
    onItemPressed:()=>void
    loading?:boolean
    error?:ApolloError
}