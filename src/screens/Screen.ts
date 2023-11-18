import { ParamListBase } from '@react-navigation/native';

export enum Screen {
  HomeScreen = 'Home',
  CheckIt = 'CheckIt',
  Farm = 'Farm',
}

export type HomeStackParamList = {
  [Screen.HomeScreen]: ParamListBase;
  [Screen.CheckIt]: ParamListBase;
  [Screen.Farm]: ParamListBase;
};
