require('react-native-reanimated').setUpTests();

jest.mock('@react-navigation/native', () => {
  const { useEffect } = require('react');
  const actualNav = jest.requireActual('@react-navigation/native');

  const navigate = jest.fn();
  const goBack = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const useRoute = jest.fn();
  const setOptions = jest.fn();

  return {
    ...actualNav,
    useNavigation: () => ({
      navigate,
      dispatch,
      goBack,
      getState,
      setOptions,
    }),
    useIsFocused: () => true,
    useFocusEffect: useEffect,
    useRoute,
  };
});

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.InteractionManager = {
    runAfterInteractions: (f: () => void) => f(),
  };

  return RN;
});

//https://github.com/th3rdwave/react-native-safe-area-context/issues/31
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
