import React from 'react';
import { FlatList, SafeAreaView, FlatListProps } from 'react-native';

import AppTile, { AppIdType, AppType } from '@YaraPlus/components/AppTile';
import { useTypedNavigation } from '@YaraPlus/hooks/useTypedNavigation';

import { HomeStackParamList, Screen } from '../Screen';
import styled from 'styled-components/native';

const data: AppType[] = [
  { id: AppIdType.CheckIt, title: 'CheckIT' },
  { id: AppIdType.Farm, title: 'At Farm' },
  { id: AppIdType.TankMix, title: 'TankMixIT' },
  { id: AppIdType.CropMonitor, title: 'CropMonitor' },
];

const HomeScreen = () => {
  const navigation = useTypedNavigation<HomeStackParamList>();

  const onAppSelect = (app: { id: string; title: string }) => {
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

  const renderItem = ({ item }: { item: AppType }) => (
    <AppTile app={item} onAppSelect={onAppSelect} />
  );

  return (
    <HomeWrapper>
      <AppFlatList
        style={{ width: '100%' }}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
