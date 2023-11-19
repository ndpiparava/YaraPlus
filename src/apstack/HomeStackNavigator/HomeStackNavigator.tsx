import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@YaraPlus/screens/HomeScreen';
import { HomeStackParamList, Screen } from '@YaraPlus/screens/Screen';

import CheckITRootNavigation from '../../../modules/CheckIT/navigation';
import FarmRootNavigation from '../../../modules/atfram/navigation';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={Screen.HomeScreen}>
      <HomeStack.Screen name={Screen.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={Screen.Farm}
        component={FarmRootNavigation}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screen.CheckIt}
        component={CheckITRootNavigation}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
