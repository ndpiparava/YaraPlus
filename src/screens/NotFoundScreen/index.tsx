import { Text } from 'react-native';
import styled from 'styled-components/native';

const NotFoundScreen = () => {
  return (
    <Wrapper>
      <Text>
        Module or Screen is not available, Please check or report issue
      </Text>
    </Wrapper>
  );
};

export default NotFoundScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightSecondaryBlue};
`;
