import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useTypedNavigation = <T>() => {
  const navigation = useNavigation<NavigationProp<T>>();

  return navigation;
};
