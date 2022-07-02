import { EStatus } from "features/todos/models/enums/ETodo.enums/EStatus.enum"

export type TTodoItemProps ={
    id:string
    todo:string
    time:string
    status: EStatus
}