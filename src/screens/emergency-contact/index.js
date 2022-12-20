import React from 'react';
import Header from 'src/common/header';
import {Block, Button, hp, Input, Text, wp} from '_elements';

const EmergencyContact = () => {
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="Get Help" />
      <Block defaultPadding flex={false} margin={[hp(5), 0, 0]}>
        <Text center size={20} bold>
          Please enter your emergency Contact information below.
        </Text>
        <Block flex={false} margin={[hp(10), 0, 0]}>
          <Input
            placeholder={'Emergency Contact Name'}
            label="Emergency Contact Name"
          />
        </Block>
        <Block flex={false} margin={[hp(2), 0, 0]}>
          <Input
            placeholder={'Emergency Contact Phone Number'}
            label="Emergency Contact Phone Number"
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
export default EmergencyContact;
