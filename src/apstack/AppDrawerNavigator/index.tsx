import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useTheme } from 'styled-components';
import { AppIdType, useGetYaraApps } from 'yara-commons';

import NotFoundScreen from '@YaraPlus/screens/NotFoundScreen';
import { Screens } from '@YaraPlus/screens/Screen';
import {
  CheckModule,
  CropModule,
  FarmModule,
  TankMixModule,
} from '@YaraPlus/submodules';

import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const { products } = useGetYaraApps();

  const theme = useTheme();

  const getDrawerMenuComponent = (appId: AppIdType) => {
    switch (appId) {
      case AppIdType.Farm:
        return FarmModule;
      case AppIdType.CheckIt:
        return CheckModule;
      case AppIdType.CropMonitor:
        return CropModule;
      case AppIdType.TankMix:
        return TankMixModule;
      default:
        return NotFoundScreen;
    }
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={Screens.DrawerHomeScreen}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            color: theme.colors.superWhite,
            fontSize: theme.fonts.size.medium,
          },
          drawerItemStyle: { backgroundColor: theme.colors.lightSecondaryBlue },
        }}
      />

      {products.map(product => (
        <Drawer.Screen
          key={product.id}
          name={product.title}
          component={getDrawerMenuComponent(product.id)}
          initialParams={{ product }}
          options={{
            headerShown: false,
            drawerLabelStyle: {
              color: theme.colors.superWhite,
              fontSize: theme.fonts.size.medium,
            },
            drawerItemStyle: { backgroundColor: product.brandColor },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
