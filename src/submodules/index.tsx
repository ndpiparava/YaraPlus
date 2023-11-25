import React, { Suspense } from 'react';
import { AppIdType } from 'yara-commons';

import NotFoundScreen from '@YaraPlus/screens/NotFoundScreen';

const getModule = async (appId: AppIdType) => {
  try {
    let importedModule;

    switch (appId) {
      case AppIdType.Farm:
        importedModule = await import('modules/atfarm/navigation');
        break;

      case AppIdType.CheckIt:
        importedModule = await import('modules/CheckIT/navigation');
        break;

      case AppIdType.CropMonitor:
        importedModule = await import('modules/CropMonitor/navigation');
        break;

      case AppIdType.TankMix:
        importedModule = await import('modules/TankMix/navigation');
        break;

      default:
        return { default: NotFoundScreen };
    }

    if (
      importedModule.default &&
      typeof importedModule.default === 'function'
    ) {
      return { default: importedModule.default };
    } else {
      console.error(
        `Invalid default export for ${appId} module:`,
        importedModule.default,
      );
      return { default: NotFoundScreen };
    }
  } catch (error) {
    console.error('Error while importing module:', error);
    return { default: NotFoundScreen };
  }
};

export const CheckModule = React.lazy(() => getModule(AppIdType.CheckIt));
export const FarmModule = React.lazy(() => getModule(AppIdType.Farm));
export const CropModule = React.lazy(() => getModule(AppIdType.CropMonitor));
export const TankMixModule = React.lazy(() => getModule(AppIdType.TankMix));

const LazyLoadedComponent = (moduleId: AppIdType) => {
  const LazyComponent = React.lazy(() => getModule(moduleId));

  return (
    <Suspense fallback={<NotFoundScreen />}>
      {React.createElement(LazyComponent)}
    </Suspense>
  );
};

export const CheckModule1 = LazyLoadedComponent(AppIdType.CheckIt);
export const FarmModule1 = LazyLoadedComponent(AppIdType.Farm);
export const CropModule1 = LazyLoadedComponent(AppIdType.CropMonitor);
export const TankMixModule1 = LazyLoadedComponent(AppIdType.TankMix);
