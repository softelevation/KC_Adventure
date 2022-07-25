import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {ScrollView, FlatList} from 'react-native';
const LocationDetails = () => {
  const _renderVerticalItem = ({item}) => {
    return (
      <Block safearea={true} primary>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <ImageComponent name="aboutus_img" width={wp(115)} height={208} />
          <Block flex={false} padding={[hp(2), wp(3)]}>
            <Text medium height={24} size={16} color={'#444444'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non a leo
              felis, amet adipiscing gravida eget. Montes, amet turpis non neque
              venenatis in sed. Mauris venenatis sed et, cras. Quisque fermentum
              faucibus eget sit et nulla sodales. Tellus pellentesque dignissim
              malesuada in netus odio sed congue. Arcu, tempor ut posuere urna
              mauris. Est a risus, nisi nisi. Odio at vitae in massa diam
              habitant ullamcorper volutpat non.{'\n'}
            </Text>
          </Block>
        </ScrollView>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="bike details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block center flex={false}>
          <Text
            spacing={1}
            height={27}
            gutterBottom
            center
            margin={[hp(1), wp(10)]}
            bold
            size={18}>
            Before you get going let’s review some important information!
          </Text>
          <Block margin={[hp(1), 0, 0]} flex={false}>
            <FlatList
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              data={['All', 'America']}
              renderItem={_renderVerticalItem}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default LocationDetails;
