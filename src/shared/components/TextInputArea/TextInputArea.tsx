import { TextInput, TextInputProps} from 'react-native';
import React from 'react';
import { useThemed } from 'shared/hooks/useThemed';
import { TColors } from 'shared/models/types/theme.types';

export const TextInputArea = ({light,dark,...props}: TextInputProps &TColors) => {
  const themedColor = useThemed({dark, light}, 'secondaryBackground');
  const color = useThemed({dark, light}, 'text');
  const themed = {
    borderColor: themedColor,
    color,
  };
  return <TextInput 
  placeholderTextColor={themedColor}
  multiline {...props} style={[themed,props.style]} />;
};