import { ParamListBase } from '@react-navigation/native';

export enum Screens {
  HomeScreen = 'AppHome',
  DrawerHomeScreen = 'Home',
  CheckIt = 'CheckIt',
  Farm = 'Farm',
  TankMixIT = 'TankMixIT',
  CropMonitor = 'CropMonitor',
  DrawerMenu = 'DrawerMenu',
}

export type HomeStackParamList = {
  [Screens.HomeScreen]: ParamListBase;
  [Screens.CheckIt]: undefined;
  [Screens.Farm]: undefined;
  [Screens.TankMixIT]: undefined;
  [Screens.CropMonitor]: undefined;
};

export type DrawerParamList = {
  [Screens.DrawerMenu]: ParamListBase;
  [Screens.HomeScreen]: HomeStackParamList;
};
