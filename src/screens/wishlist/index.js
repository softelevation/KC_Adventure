import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, wp, Text} from '_elements';
import {FlatList} from 'react-native';
const WishlistScreen = () => {
  const _renderVerticalItem = ({item}) => {
    return (
      <Block
        row
        primary
        shadow
        margin={[hp(3), wp(2), 0]}
        borderRadius={20}
        flex={false}>
        <ImageComponent name="demo_icon" width={152} height={131} radius={14} />
        <Block center flex={false} margin={[hp(3), 0, 0, wp(5)]}>
          <Block style={{width: wp(50)}} space={'between'} row flex={false}>
            <Text h4 bold color={'#303030'}>
              Isola Bella
            </Text>
            <ImageComponent name="hearts_icon" width={23} height={20} />
          </Block>
          <Block
            margin={[hp(1), 0, 0]}
            style={{width: wp(50)}}
            row
            center
            flex={false}>
            <ImageComponent name="location_icon" width={16} height={16} />
            <Text margin={[0, 0, 0, wp(3)]} h4 medium color={'#303030'}>
              Italy
            </Text>
          </Block>
          <Block
            margin={[hp(1), 0, 0]}
            style={{width: wp(50)}}
            row
            center
            flex={false}>
            <ImageComponent name="star_icon" width={20} height={20} />
            <Text margin={[0, 0, 0, wp(3)]} h4 semibold color={'#303030'}>
              4.2{'   '}
              <Text h5 medium>
                (2.1 km)
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header name="Wishlist" />
      <Block flex={1}>
        <FlatList
          contentContainerStyle={{marginBottom: hp(6), flexGrow: 1}}
          // horizontal
          data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
          renderItem={_renderVerticalItem}
          showsVerticalScrollIndicator={false}
        />
      </Block>
    </Block>
  );
};

export default WishlistScreen;
