import { AppIdType, AppType } from 'yara-commons';

import { HomeStackParamList, Screen } from '@YaraPlus/screens/Screen';

import { useTypedNavigation } from './useTypedNavigation';

const useAppSwitch = () => {
  const navigation = useTypedNavigation<HomeStackParamList>();

  const onAppSelect = (app: AppType) => {
    switch (app.id) {
      case AppIdType.CheckIt:
        navigation.navigate(Screen.CheckIt);
        break;
      case AppIdType.Farm:
        navigation.navigate(Screen.Farm);
        break;
      case AppIdType.TankMix:
        navigation.navigate(Screen.TankMixIT);
        break;
      case AppIdType.CropMonitor:
        navigation.navigate(Screen.CropMonitor);
        break;
      default:
        break;
    }
  };

  return {
    onAppSelect,
  };
};
export default useAppSwitch;
