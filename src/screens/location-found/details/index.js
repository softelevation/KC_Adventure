import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import CommonStyles from 'src/assets/styles';
import Header from 'src/common/header';
import {
  Block,
  CustomButton,
  hp,
  Button,
  ImageComponent,
  Text,
  VirtualizedView,
  wp,
} from '_elements';
import { RoutesName } from '_routeName';

const LocationDetails = () => {
  const [active, setActive] = useState('All');
  const navigation = useNavigation();

  const _renderVerticalItem = ({ item }) => {
    return (
      <CustomButton
        activeOpacity={0.9}

        onPress={() => {
          navigation.navigate(RoutesName.LOCATION_FOUND_SCREEN);
        }}>

        <Block
          header
          shadow
          margin={[hp(1.4),wp(1),]}
          padding={[hp(2), wp(3)]}
          borderRadius={20}
          flex={false}>
          <ImageComponent name="Location_Detail" width={330} height={130} radius={15} />
          <Block flex={false} margin={[hp(0.7), 0, 0, wp(5)]}>
            <Block center space={'between'} row flex={false}>
              <Text h3 bold color={'#323232'} >
                Lake Cruise
              </Text>
              <Button
                shadow
                style={{ width: wp(23), paddingVertical: hp(1) }}
                textStyle={{ lineHeight: 15, marginTop: hp(0.3) }}
                size={13}
                color={'secondary'}>
                book
              </Button>
            </Block>

            <Block
              margin={[hp(1), 0, 0]}
              style={{ width: wp(75) }}
              middle

              flex={false}>
              <Text h4 color={'#323232'} style={{ backgroundcolor: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.
              </Text>
            </Block>
          </Block>
        </Block>

      </CustomButton>
    );
  };

  return (
    <Block safearea={true} primary>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Block center flex={false} padding={[0, wp(4)]}>
          <Block
            padding={[0, 0, hp(4), 0]}
            style={{ width: wp(100), height: hp(30) }}
            center
            middle
            color='#374957'
            flex={false}>
            <Text h3 bold color={'#FFFFFF'} center style={{ width: wp(90) }}>
              We found your location! Please pick the tour that best fits your interest and adventure level!
            </Text>
          </Block>
          <Block margin={[-hp(9), 0, 0]} flex={false}>

            <FlatList
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
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
