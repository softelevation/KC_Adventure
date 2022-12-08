import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import {Block, Button, hp, ImageComponent, Input, Text, wp} from '_elements';
import {RoutesName} from '_routeName';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {authRequest} from 'src/redux/login/action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate} from 'src/routes/navigation-service';

const LoginScreen = () => {
  // const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.login.loading);
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(7, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: values => {
      const data = {
        email: values.email,
        password: values.password,
      };
      dispatch(authRequest(data));
    },
  });
  return (
    <ImageBackground source={images.bg} style={CommonStyles.defaultFlex}>
      <SafeAreaView />
      <KeyboardAwareScrollView>
        <Block margin={[hp(15), 0, 0]} defaultPadding={true} flex={false}>
          <Text semibold h1>
            Sign In
          </Text>
          <Text medium h3 margin={[hp(1), 0, 0]}>
            KC&E Adventures
          </Text>
          <Block flex={false} margin={[hp(2), 0, 0]}>
            <Input
              placeholder={'Email Address'}
              label="Email Address"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={() => formik.setFieldTouched('email')}
              error={formik.touched.email && formik.errors.email}
            />
            <Block flex={false} margin={[hp(1.5), 0, 0]}>
              <Input
                primary
                secure={true}
                placeholder={'Password'}
                label="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={() => formik.setFieldTouched('password')}
                error={formik.touched.password && formik.errors.password}
              />
            </Block>
          </Block>
          <Text semibold h5 center info margin={[hp(3), 0, hp(4)]}>
            Forgot your password ?
          </Text>
          <Block flex={false} center>
            <Button
              onPress={() => formik.handleSubmit()}
              // onPress={() => navigate(RoutesName.DASHBOARD_STACK_SCREEN)}
              style={{width: wp(35)}}
              uppercase
              disabled={!formik.isValid}
              isLoading={loading}
              color={'primary'}>
              Sign In
            </Button>
          </Block>
          <Block margin={[hp(2), 0]} center space={'between'} flex={false} row>
            <Block
              style={{width: wp(25)}}
              flex={false}
              borderWidth={[0, 0, 1, 0]}
              borderColorDeafult
            />
            <Text paragraph>Or sign up using</Text>
            <Block
              style={{width: wp(25)}}
              flex={false}
              borderWidth={[0, 0, 1, 0]}
              borderColorDeafult
            />
          </Block>
          <Block margin={[hp(2), 0]} middle flex={false} row center>
            <Block
              margin={[0, wp(3)]}
              center
              middle
              flex={false}
              borderRadius={40}
              shadow
              header
              style={CommonStyles.icon}>
              <ImageComponent name="google" height={20} width={20} />
            </Block>
            <Block
              center
              middle
              flex={false}
              shadow
              borderRadius={40}
              header
              style={CommonStyles.icon}>
              <ImageComponent name="apple" height={22} width={20} />
            </Block>
          </Block>
          <Text medium color={'#1F1F1F'} center>
            Don't have an Account?{' '}
            <Text
              onPress={() => navigate(RoutesName.SIGNUP_SCREEN)}
              secondary={true}
              bold>
              Sign Up!
            </Text>
          </Text>
        </Block>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
