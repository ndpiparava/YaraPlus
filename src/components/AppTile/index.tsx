import { memo } from 'react';
import styled from 'styled-components/native';
import { AppType } from 'yara-commons';

type PropsType = {
  app: AppType;
  backgroundColor?: string;
  onAppSelect: (app: AppType) => void;
  isFeatureEnabled?: boolean;
};

const AppTile = ({
  app,
  onAppSelect,
  backgroundColor,
  isFeatureEnabled = true,
}: PropsType) => {
  if (!isFeatureEnabled) {
    return <BlankView />;
  }

  return (
    <TileContainer
      onPress={() => onAppSelect(app)}
      backgroundColor={backgroundColor}
    >
      <ButtonText>{app.title}</ButtonText>
    </TileContainer>
  );
};

export default memo(AppTile);

type TileContainerPropsType = {
  backgroundColor?: string;
};

const TileContainer = styled.Pressable<TileContainerPropsType>`
  flex: 1;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.lightSecondaryBlue};
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
  //width: 50%;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  text-align: center;
`;

const BlankView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  //width: 50%;
`;
