import CheckITRootNavigation from 'modules/CheckIT/navigation';
import CropMonitorRootNavigation from 'modules/CropMonitor/navigation';
import TankMixRootNavigation from 'modules/TankMix/navigation';
import FarmRootNavigation from 'modules/atfarm/navigation';

export const CheckModule = CheckITRootNavigation;
export const CropModule = CropMonitorRootNavigation;
export const TankMixModule = TankMixRootNavigation;
export const FarmModule = FarmRootNavigation;

/*

import React, { Suspense, lazy, memo, useCallback } from 'react';
import { AppIdType } from 'yara-commons';
import NotFoundScreen from '@YaraPlus/screens/NotFoundScreen';


const CheckModule = lazy(() => import('modules/CheckIT/navigation'));
const CropModule = lazy(() => import('modules/CropMonitor/navigation'));
const TankMixModule = lazy(() => import('modules/TankMix/navigation'));
const FarmModule = lazy(() => import('modules/atfarm/navigation'));

const AppModule = ({ appId }) => {
  const getDrawerMenuComponent = useCallback(() => {
    switch (appId) {
      case AppIdType.Farm:
        return FarmModule;
      case AppIdType.CheckIt:
        return CheckModule;
      case AppIdType.CropMonitor:
        return CropModule;
      case AppIdType.TankMix:
        return TankMixModule;
      default:
        return NotFoundScreen;
    }
  }, [appId]);

  const Component = getDrawerMenuComponent();

  return (
    <Suspense fallback={<NotFoundScreen />}>
      // { {React.createElement(getDrawerMenuComponent(appId))} }
      <Component />
    </Suspense>
  );
};


export default AppModule;

*/
