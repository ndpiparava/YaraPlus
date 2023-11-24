import styled from 'styled-components/native';

import HamburgerMenuIcon from '@YaraPlus/assets/Icons/HamburgerMenuIcon';
import useRootNavigation from '@YaraPlus/hooks/useRootNavigation';
import BackArrowIcon from '@YaraPlus/assets/Icons/BackArrowIcon';

type PropsType = {
  showBackButton?: boolean;
};

const HamburguerMenu = ({ showBackButton = true }: PropsType) => {
  const { openDrawerMenu, goBack } = useRootNavigation();

  return (
    <Wrapper>
      {showBackButton && (
        <HamburgerMenuWrapper onPress={goBack}>
          <BackArrowIcon />
        </HamburgerMenuWrapper>
      )}
      <HamburgerMenuWrapper onPress={openDrawerMenu}>
        <HamburgerMenuIcon />
      </HamburgerMenuWrapper>
    </Wrapper>
  );
};

export default HamburguerMenu;

const HamburgerMenuWrapper = styled.Pressable`
  width: 34px;
  height: 34px;
  padding: 5px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  justify-content: center;
  align-items: left;
  gap: 1px;
`;
