import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {FlatList} from 'react-native';
const Notifications = () => {
  const _renderItem = ({item}) => {
    return (
      <Block
        row
        header
        shadow
        margin={[hp(1.5), wp(2), 0, wp(2)]}
        borderRadius={14}
        center
        padding={[hp(1.2), 0]}
        flex={false}>
        <Block flex={false} margin={[0, 0, 0, wp(2)]}>
          <ImageComponent name="demo_icon" width={50} height={50} radius={10} />
        </Block>
        <Text h4 style={{width: wp(71)}} margin={[0, 0, 0, wp(3)]}>
          {item}
        </Text>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header name="Notification" />
      <Block flex={1} margin={[0, wp(3)]}>
        <FlatList
          data={[
            'Thank you for booking your appointment.',
            'Happy Holidays! Thank you for being a valued team member.',
            'Thanks for reaching out!',
            'Thanks for contacting KC&E Adventures! Our hours are Monday to Saturday 10 a.m. to 9 p.m. and Sundays 10 a.m. to 6 p.m. We’ll get back to you during business hours.',
          ]}
          contentContainerStyle={{paddingBottom: hp(3)}}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default Notifications;
