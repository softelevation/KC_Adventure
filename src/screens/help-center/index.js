import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Header from 'src/common/header';
import {Block, Button, hp, Input, wp} from '_elements';
import {RoutesName} from '_routeName';

const HelpCenter = () => {
  const {navigate} = useNavigation();
  return (
    <Block safearea={true} primary>
      <Header name="Help Center" />
      <Block defaultPadding flex={false} margin={[hp(2), 0, 0]}>
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
            placeholder={'Primary Contact Number'}
            label="Primary Contact Number"
            number
          />
        </Block>
        <Block flex={false} margin={[hp(1), 0, 0]}>
          <Input
            placeholder={'Secondary Contact Number'}
            label="Secondary Contact Number"
            number
          />
        </Block>
      </Block>
      <Block flex={false} center margin={[hp(4), 0, 0]}>
        <Button
          // onPress={() => navigate(RoutesName.TOUR_DETAILS_SCREEN)}
          style={{width: wp(35)}}
          uppercase
          color={'primary'}>
          next
        </Button>
      </Block>
    </Block>
  );
};

export default HelpCenter;
