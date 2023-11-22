import { CheckItRootStackParamList } from '@modules/CheckIT/screens';
import { ParamListBase } from '@react-navigation/native';

// import { CheckItRootStackParamList } from 'modules/CheckIT/screens';
import { TankMixRootStackParamList } from 'modules/TankMixIT/screens';

import { CropMonitorRootStackParamList } from 'modules/CropMonitor/screens';
import { FarmRootStackParamList } from 'modules/atfram/screens';

export enum Screen {
  HomeScreen = 'Home',
  CheckIt = 'CheckIt',
  Farm = 'Farm',
  TankMixIT = 'TankMixIT',
  CropMonitor = 'CropMonitor',
}

export type HomeStackParamList = {
  [Screen.HomeScreen]: ParamListBase;
  [Screen.CheckIt]: CheckItRootStackParamList;
  [Screen.Farm]: FarmRootStackParamList;
  [Screen.TankMixIT]: TankMixRootStackParamList;
  [Screen.CropMonitor]: CropMonitorRootStackParamList;
};
