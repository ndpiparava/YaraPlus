import { AppIdType, AppType } from 'yara-commons';

import { HomeStackParamList, Screens } from '@YaraPlus/screens/Screen';

import { useTypedNavigation } from './useTypedNavigation';

const useAppSwitch = () => {
  const navigation = useTypedNavigation<HomeStackParamList>();

  const onAppSelect = (app: AppType) => {
    switch (app.id) {
      case AppIdType.CheckIt:
        navigation.navigate(Screens.CheckIt);
        break;
      case AppIdType.Farm:
        navigation.navigate(Screens.Farm);
        break;
      case AppIdType.TankMix:
        navigation.navigate(Screens.TankMixIT);
        break;
      case AppIdType.CropMonitor:
        navigation.navigate(Screens.CropMonitor);
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
