import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { useGetYaraApps, AppType } from 'yara-commons';

import useAppSwitch from '@YaraPlus/hooks/useAppSwitch';

const MenuList = () => {
  const { products } = useGetYaraApps();
  const { onAppSelect } = useAppSwitch();
  const renderItem = ({ item }: { item: AppType }) => (
    <ItemContainer
      onPress={() => onAppSelect(item)}
      backgroundColor={item.brandColor}
    >
      <ItemText>{item.title}</ItemText>
      <Divider />
    </ItemContainer>
  );

  return (
    <MenuFlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MenuList;

const MenuFlatList = styled(
  FlatList as new (props: FlatListProps<AppType>) => FlatList<AppType>,
)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightSecondaryBlue};
`;

type ItemContainerProps = {
  backgroundColor?: string;
};

const ItemContainer = styled.Pressable<ItemContainerProps>`
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.lightSecondaryBlue};
`;

const ItemText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.size.medium}px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  bottom-margin: px;
`;
