import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EBottomTabRoutes} from 'shared/models/enums/navigation.enums';
import {TBottomTabNavigator} from 'shared/models/types/navigation.types/TBottomTabNavigator.type';
import {Todos} from 'features/todos/screens';
import {Settings} from 'features/settings/screens';
import {Text} from 'react-native';
import {SettingsIcon} from 'shared/components/svgs/settingsIcon';
import {useThemed} from 'shared/hooks/useThemed';
import {TColors} from 'shared/models/types/theme.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { TodosIcon } from 'shared/components/svgs/todosIcon';

const BottomTab = createBottomTabNavigator<TBottomTabNavigator>();

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
        component={Todos}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => <SettingsIcon isFocused={focused} />,
        }}
        name={EBottomTabRoutes.settings}
        component={Settings}
      />
    </BottomTab.Navigator>
  );
};
