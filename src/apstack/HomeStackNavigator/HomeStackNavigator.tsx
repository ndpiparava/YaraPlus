import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@YaraPlus/screens/HomeScreen';
import { HomeStackParamList, Screen } from '@YaraPlus/screens/Screen';

import CheckIt from '../../../modules/CheckIT/CheckIt';
import Farm from '../../../modules/atfram/Farm';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={Screen.HomeScreen}>
      <HomeStack.Screen name={Screen.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen name={Screen.Farm} component={Farm} />
      <HomeStack.Screen name={Screen.CheckIt} component={CheckIt} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
