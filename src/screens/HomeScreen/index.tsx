import React from 'react';
import { FlatList, SafeAreaView, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { useGetYaraApps, AppType } from 'yara-commons';

import AppTile from '@YaraPlus/components/AppTile';
import useAppSwitch from '@YaraPlus/hooks/useAppSwitch';

const HomeScreen = () => {
  const { products } = useGetYaraApps();
  const { onAppSelect } = useAppSwitch();

  const renderItem = ({ item }: { item: AppType }) => (
    <AppTile app={item} onAppSelect={onAppSelect} />
  );

  return (
    <HomeWrapper>
      <AppFlatList
        style={{ width: '100%' }}
        data={products}
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
