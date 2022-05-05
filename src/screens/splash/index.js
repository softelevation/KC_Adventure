/* eslint-disable react-hooks/exhaustive-deps */
import {ImageBackground} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import CommonStyles from 'src/assets/styles';
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RoutesName} from '_routeName';

const SplashScreen = () => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: RoutesName.AUTH_STACK_SCREEN}],
          }),
        );
      }, 3000);
    }, []),
  );
  return (
    <ImageBackground source={images.splash} style={CommonStyles.defaultFlex} />
  );
};

export default SplashScreen;
