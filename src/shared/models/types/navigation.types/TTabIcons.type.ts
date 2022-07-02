import { TColors } from "shared/models/types/theme.types";
import { SvgProps } from 'react-native-svg'

export type TTabIcons = SvgProps &
    TColors & {
        isFocused: boolean;
    };
