import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import {Block, Button, hp, ImageComponent, Input, Text, wp} from '_elements';

const LoginScreen = () => {
  return (
    <ImageBackground source={images.bg} style={CommonStyles.defaultFlex}>
      <SafeAreaView />
      <Block margin={[hp(10), 0, 0]} defaultPadding={true} flex={false}>
        <Text center={true} h1 semibold>
          Sign up
        </Text>
        <Block flex={false} margin={[hp(2), 0, 0]}>
          <Block row space={'between'} flex={false} margin={[hp(1), 0, 0]}>
            <Input
              style={{width: wp(39)}}
              placeholder={'First Name'}
              label="First Name"
            />
            <Input
              style={{width: wp(39)}}
              placeholder={'Last Name'}
              label="Last Name"
            />
          </Block>
          <Block flex={false} margin={[hp(1), 0, 0]}>
            <Input placeholder={'Email Address'} label="Email Address" />
          </Block>

          <Block flex={false} margin={[hp(1), 0, 0]}>
            <Input
              primary
              secure={true}
              placeholder={'Password'}
              label="Password"
            />
          </Block>
          <Block flex={false} margin={[hp(1), 0, 0]}>
            <Input
              primary
              secure={true}
              placeholder={'Confirm Password'}
              label="Confirm Password"
            />
          </Block>
        </Block>
        <Block flex={false} center margin={[hp(2), 0, 0]}>
          <Button style={{width: wp(35)}} uppercase color={'primary'}>
            Confirm
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
            primary
            style={CommonStyles.icon}>
            <ImageComponent name="google" height={20} width={20} />
          </Block>
          <Block
            center
            middle
            flex={false}
            borderRadius={40}
            primary
            style={CommonStyles.icon}>
            <ImageComponent name="apple" height={22} width={20} />
          </Block>
        </Block>
      </Block>
    </ImageBackground>
  );
};

export default LoginScreen;
