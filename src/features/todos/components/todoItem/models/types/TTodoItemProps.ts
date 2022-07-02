import { EStatus } from "features/todos/models/enums/ETodo.enums/EStatus.enum"

export type TTodoItemProps ={
    todo:string
    time:string
    status: EStatus
}