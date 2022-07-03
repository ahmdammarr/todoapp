import { ApolloError } from "@apollo/client"
import { StyleProp, ViewStyle } from "react-native"
import { EButtonVariants } from "../enums"

export type TActionButtonProps = {
    label: string
    loading?:boolean
    error?:boolean | ApolloError
    variant: EButtonVariants
    style?: StyleProp<ViewStyle>
    onPress:()=>void
}