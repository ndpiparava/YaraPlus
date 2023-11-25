import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { lazy, Suspense } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components';
import { useGetYaraApps } from 'yara-commons';

import DrawerMenuScreen from '@YaraPlus/screens/DrawerMenuScreen';
import { Screens } from '@YaraPlus/screens/Screen';

import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';

// Lazy import statements
const CheckITRootNavigation = lazy(() => import('modules/CheckIT/navigation'));
const CropMonitorRootNavigation = lazy(
  () => import('modules/CropMonitor/navigation'),
);
const TankMixRootNavigation = lazy(() => import('modules/TankMix/navigation'));
const FarmRootNavigation = lazy(() => import('modules/atfarm/navigation'));

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const { products } = useGetYaraApps();

  const theme = useTheme();

  const getDrawerMenuComponent = (product: any) => {
    switch (product.id) {
      case 'farm':
        return FarmRootNavigation;
      case 'checkit':
        return CheckITRootNavigation;
      case 'cropmonitor':
        return CropMonitorRootNavigation;
      case 'tankmix':
        return TankMixRootNavigation;
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
            <Suspense fallback={<LoadingFallback />}>
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

// LoadingFallback component to show while lazy component is loading
const LoadingFallback = () => (
  <View>
    <Text>Loading...</Text>
  </View>
);

export default AppDrawerNavigator;
