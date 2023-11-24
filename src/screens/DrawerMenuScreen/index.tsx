import styled from 'styled-components/native';

import MenuList from '@YaraPlus/components/MenuList';

const DrawerMenuScreen = () => {
  return (
    <Wrapper>
      <MenuList />
    </Wrapper>
  );
};

export default DrawerMenuScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
