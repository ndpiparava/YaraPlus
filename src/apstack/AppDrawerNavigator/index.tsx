import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Suspense } from 'react';
import { useTheme } from 'styled-components';
import { AppIdType, AppType, useGetYaraApps } from 'yara-commons';

import DrawerMenuScreen from '@YaraPlus/screens/DrawerMenuScreen';
import NotFoundScreen from '@YaraPlus/screens/NotFoundScreen';
import { Screens } from '@YaraPlus/screens/Screen';
import {
  FarmModule,
  CheckModule,
  CropModule,
  TankMixModule,
} from '@YaraPlus/submodules';

import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const { products } = useGetYaraApps();

  const theme = useTheme();

  const getDrawerMenuComponent = (product: AppType) => {
    switch (product.id) {
      case AppIdType.Farm:
        return FarmModule;
      case AppIdType.CheckIt:
        return CheckModule;
      case AppIdType.CropMonitor:
        return CropModule;
      case AppIdType.TankMix:
        return TankMixModule;
      default:
        return DrawerMenuScreen;
    }
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={Screens.HomeScreen}
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
          component={() => (
            <Suspense fallback={<NotFoundScreen />}>
              {React.createElement(getDrawerMenuComponent(product))}
            </Suspense>
          )}
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
