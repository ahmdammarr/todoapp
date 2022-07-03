
export type TTodoItemProps ={
    todo:string
    time: Date | string
    onItemPressed:()=>void
    loading?:boolean
    error?:boolean
}