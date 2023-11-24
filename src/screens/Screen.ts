import { ParamListBase } from '@react-navigation/native';

import { CheckItRootStackParamList } from 'modules/CheckIT/screens';
import { CropMonitorRootStackParamList } from 'modules/CropMonitor/screens';
import { TankMixRootStackParamList } from 'modules/TankMix/screens';
import { FarmRootStackParamList } from 'modules/atfarm/screens';

export enum Screens {
  HomeScreen = 'Home',
  CheckIt = 'CheckIt',
  Farm = 'Farm',
  TankMixIT = 'TankMixIT',
  CropMonitor = 'CropMonitor',
  DrawerMenu = 'DrawerMenu',
}

export type HomeStackParamList = {
  [Screens.HomeScreen]: ParamListBase;
  [Screens.CheckIt]: CheckItRootStackParamList;
  [Screens.Farm]: FarmRootStackParamList;
  [Screens.TankMixIT]: TankMixRootStackParamList;
  [Screens.CropMonitor]: CropMonitorRootStackParamList;
};

export type DrawerParamList = {
  [Screens.DrawerMenu]: ParamListBase;
  [Screens.HomeScreen]: HomeStackParamList;
};
