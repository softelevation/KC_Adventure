import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {FlatList} from 'react-native';
const Notifications = () => {
  const _renderItem = () => {
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
        <Text
          h5
          color={'#A5A4A4'}
          style={{width: wp(71)}}
          margin={[0, 0, 0, wp(3)]}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit nunc
          vulputate.Lorem ipsum dolors sit amet, conse.
        </Text>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header name="Notification" />
      <Block flex={1} margin={[0, wp(3)]}>
        <FlatList
          data={['1', '2', '3', '4']}
          contentContainerStyle={{paddingBottom: hp(3)}}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default Notifications;
