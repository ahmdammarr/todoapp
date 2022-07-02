import { View, ViewProps } from "react-native";
import React from "react";
import { useThemed } from "shared/hooks/useThemed";
import { TThemedView } from "shared/models/types/theme.types";


const ThemedView = (props: TThemedView) => {
  const { style, light, dark, ...otherProps } = props;
  const backgroundColor = useThemed({ light, dark }, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export {ThemedView};
