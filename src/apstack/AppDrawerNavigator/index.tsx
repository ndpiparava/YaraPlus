import { createDrawerNavigator } from '@react-navigation/drawer';
import { useGetYaraApps } from 'yara-commons';

import DrawerMenuScreen from '@YaraPlus/screens/DrawerMenuScreen';
import { Screens } from '@YaraPlus/screens/Screen';
import CheckITRootNavigation from 'modules/CheckIT/navigation';
import CropMonitorRootNavigation from 'modules/CropMonitor/navigation';
import TankMixRootNavigation from 'modules/TankMix/navigation';
import FarmRootNavigation from 'modules/atfarm/navigation';

import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const { products } = useGetYaraApps();

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
        options={{ headerShown: false }}
      />

      {products.map(product => (
        <Drawer.Screen
          key={product.id}
          name={product.title}
          component={getDrawerMenuComponent(product)}
          initialParams={{ product }}
          options={{ headerShown: false }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
