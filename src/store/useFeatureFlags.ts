import { create } from 'zustand';

const initialValues = {
  showCropModule: false,
};

export type FeatureFlagProps = {
  showCropModule: boolean;
  setShowCropModule: (showCropModule: boolean) => void;
};

export const useFeatureFlags = create<FeatureFlagProps>(set => ({
  ...initialValues,
  setShowCropModule: (showCropModule: boolean) => {
    set({ showCropModule });
  },
}));
