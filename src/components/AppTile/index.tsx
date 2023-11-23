import { memo } from 'react';
import styled from 'styled-components/native';
import { AppType } from 'yara-commons';

type PropsType = {
  app: AppType;
  onAppSelect: (app: AppType) => void;
};

const AppTile = ({ app, onAppSelect }: PropsType) => {
  return (
    <TileContainer onPress={() => onAppSelect(app)}>
      <ButtonText>{app.title}</ButtonText>
    </TileContainer>
  );
};

export default memo(AppTile);

const TileContainer = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightSecondaryBlue};
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

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  text-align: center;
`;
