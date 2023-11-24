import { useNavigation } from '@react-navigation/native';

const useRootNavigation = () => {
  const navigation = useNavigation();
  const openDrawerMenu = () => {
    navigation.openDrawer();
  };
  const goBack = () => {
    navigation.goBack();
  };
  return { openDrawerMenu, goBack };
};

export default useRootNavigation;
