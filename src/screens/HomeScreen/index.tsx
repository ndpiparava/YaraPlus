import React from 'react';
import { SafeAreaView } from 'react-native';

import { styled } from '@YaraPlus/themes/styled-components';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../Screen';

const HomeScreen = () => {
  const navigation = useNavigation();
  const openFarmModule = () => {
    navigation.navigate(Screen.Farm);
  };

  const openCheckItModule = () => {
    console.log('openAwesomeModule');
    navigation.navigate(Screen.CheckIt);
  };

  return (
    <HomeWrapper>
      <ButtonContainer onPress={openFarmModule}>
        <ButtonText>Open Farm Module</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={openCheckItModule}>
        <ButtonText>CheckIt</ButtonText>
      </ButtonContainer>
    </HomeWrapper>
  );
};

export default HomeScreen;

const HomeWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: top;
  align-items: left;
  gap: 20px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.superLightGrey};
  padding: 12px 24px;
  border-radius: 8px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  text-align: center;
`;
