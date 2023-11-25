import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@YaraPlus/screens/HomeScreen';
import { HomeStackParamList, Screens } from '@YaraPlus/screens/Screen';
import {
  CheckModule,
  CropModule,
  FarmModule,
  TankMixModule,
} from '@YaraPlus/submodules';

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
        component={FarmModule}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.CheckIt}
        component={CheckModule}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.TankMixIT}
        component={TankMixModule}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screens.CropMonitor}
        component={CropModule}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
