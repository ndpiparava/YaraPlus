import React from 'react';
import { FlatList, SafeAreaView, FlatListProps, Switch } from 'react-native';
import styled from 'styled-components/native';
import { useGetYaraApps, AppType, AppIdType } from 'yara-commons';

import AppTile from '@YaraPlus/components/AppTile';
import useAppSwitch from '@YaraPlus/hooks/useAppSwitch';
import { useFeatureFlags } from '@YaraPlus/store/useFeatureFlags';

const HomeScreen = () => {
  const { products } = useGetYaraApps();
  const { onAppSelect } = useAppSwitch();

  const setShowCropModule = useFeatureFlags(state => state.setShowCropModule);
  const showCropModule = useFeatureFlags(state => state.showCropModule);
  const toggleSwitch = () => setShowCropModule(!showCropModule);

  const renderItem = ({ item }: { item: AppType }) => {
    return (
      <AppTile
        app={item}
        onAppSelect={onAppSelect}
        backgroundColor={item.brandColor}
        isFeatureEnabled={
          item.id === AppIdType.CropMonitor ? showCropModule : true
        }
      />
    );
  };

  return (
    <HomeWrapper>
      <AppFlatList
        style={{ width: '100%' }}
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FeatureFlagWrapper>
        <FeatureFlagText>Show Crop Module</FeatureFlagText>
        <Switch onValueChange={toggleSwitch} value={showCropModule} />
      </FeatureFlagWrapper>
    </HomeWrapper>
  );
};

export default HomeScreen;

const HomeWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: left;
  gap: 20px;
`;

const AppFlatList = styled(
  FlatList as new (props: FlatListProps<AppType>) => FlatList<AppType>,
)``;

export const TileContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  elevation: 4;
  margin: 8px;
  padding: 16px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const FeatureFlagWrapper = styled.View`
  flex-direction: row;
  width: 90%;
  height: 60;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border-radius: 8px;
  elevation: 4;
  margin: 8px;

  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  justify-content: space-around;
  align-items: center;
`;

const FeatureFlagText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.black};
`;
