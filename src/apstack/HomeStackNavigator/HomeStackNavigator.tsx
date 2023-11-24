import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@YaraPlus/screens/HomeScreen';
import { HomeStackParamList, Screens } from '@YaraPlus/screens/Screen';
import FarmRootNavigation from 'modules/atfarm/navigation';

import CheckITRootNavigation from '../../../modules/CheckIT/navigation';
import CropMonitorRootNavigation from '../../../modules/CropMonitor/navigation';
import TankMixRootNavigation from '../../../modules/TankMix/navigation';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={Screens.HomeScreen}
      screenOptions={{ headerShown: true }}
    >
      <HomeStack.Screen name={Screens.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={Screens.Farm}
        component={FarmRootNavigation}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.CheckIt}
        component={CheckITRootNavigation}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.TankMixIT}
        component={TankMixRootNavigation}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.CropMonitor}
        component={CropMonitorRootNavigation}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
