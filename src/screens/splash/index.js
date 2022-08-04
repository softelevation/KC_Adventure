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
import {getAsync} from 'src/utils/local-storage';
import {categoryRequest} from 'src/redux/dashboard/category/action';
import {useDispatch} from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const data = await getAsync('token');
    dispatch(categoryRequest());
    if (data) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: RoutesName.DASHBOARD_STACK_SCREEN}],
          }),
        );
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: RoutesName.AUTH_STACK_SCREEN}],
          }),
        );
      }, 3000);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkAuth();
    }, []),
  );
  return (
    <ImageBackground source={images.splash} style={CommonStyles.defaultFlex} />
  );
};

export default SplashScreen;
