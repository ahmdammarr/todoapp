import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EBottomTabRoutes} from 'shared/models/enums/navigation.enums';
import {SettingsIcon} from 'shared/components/svgs/settingsIcon';
import {useThemed} from 'shared/hooks/useThemed';
import {TColors} from 'shared/models/types/theme.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { TodosIcon } from 'shared/components/svgs/todosIcon';
import { SettingsStackScreens } from 'features/settings';
import { TodosStackScreens } from 'features/todos';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = ({dark, light}: TColors) => {
  const {top} = useSafeAreaInsets();
  const iconBackgroundColor = useThemed({light, dark}, 'secondaryBackground');
  const screenContainerBackground = useThemed({light, dark}, 'background');
  const screenContainerStyle = {
    paddingTop: top,
    backgroundColor: screenContainerBackground,
  };
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: iconBackgroundColor,
    },

    tabBarActiveTintColor: iconBackgroundColor,
  };

  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={screenContainerStyle}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => <TodosIcon isFocused={focused} />,
        }}
        name={EBottomTabRoutes.todos}
        component={TodosStackScreens}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => <SettingsIcon isFocused={focused} />,
        }}
        name={EBottomTabRoutes.settings}
        component={SettingsStackScreens}
      />
    </BottomTab.Navigator>
  );
};
