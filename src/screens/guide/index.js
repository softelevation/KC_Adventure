import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, wp, Text, Button} from '_elements';
import {FlatList} from 'react-native';
const GuideScreen = () => {
  const _renderVerticalItem = ({item}) => {
    return (
      <Block
        row
        header
        shadow
        margin={[hp(3), wp(2), 0]}
        padding={[hp(2), wp(2),hp(1,wp(2))]}
        borderRadius={20}
        flex={false}>
        <ImageComponent name="guide_img" width={120} height={120} radius={14} />
        <Block flex={false} margin={[hp(0.5), 0, 0, wp(3.5)]}>
          <Block style={{width: wp(50)}} space={'between'} row flex={false}>
            <Text h4 bold color={'#303030'}>
              Ramon Richardo
            </Text>
          </Block>
          <Block
            margin={[hp(0.5), 0, 0]}
            style={{width: wp(56)}}
            row
            center
            flex={false}>
            <Text size={12} color={'#A5A4A4'}>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit nunc
              vulputate.
            </Text>
          </Block>
          <Block style={{width: wp(70)}} row center flex={false}>
            <ImageComponent name="star_icon" width={20} height={20} />
            <Text margin={[0, 0, 0, wp(1)]} h4 semibold color={'#6D6D6D'}>
              4.2
            </Text>
            <Block margin={[hp(0.5), 0, 0, wp(17)]}>
              <Button
                shadow
                style={{width: wp(23), paddingVertical: hp(1)}}
                textStyle={{lineHeight: 15, marginTop: hp(0.3)}}
                size={13}
                color={'secondary'}>
                book
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header name="Select Your Guide" />
      <Block flex={1}>
        <FlatList
          contentContainerStyle={{marginBottom: hp(6), flexGrow: 1}}
          data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
          renderItem={_renderVerticalItem}
          showsVerticalScrollIndicator={false}
        />
      </Block>
    </Block>
  );
};

export default GuideScreen;
