import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {
  Block,
  CustomButton,
  hp,
  Button,
  ImageComponent,
  Text,
  wp,
} from '_elements';
import {RoutesName} from '_routeName';
import {images} from 'src/assets';

const LocationFound = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Short Lake Tour',
      Description:
        'The short lake tour will take you from the picturesque village of New Preston around Lake Waramaug, named for Chief Waramaug of the Potatuck Native American tribe who wintered in the area. Along the way, you will pass Lake Waramaug State Park, and the renowned Hopkins Inn & Restaurant and the Hopkins Vineyard. At the end, you can lunch at The Smithy Café just steps from the KC&E office!',
      image: images.short_lake,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tanner Hill Tour',
      Description:
        'The Tanner Hill Tour will take you along the southern edge of Lake Waramaug before you turn inland toward Kent where you will pass picturesque properties, stonewalls, and forests. Along the way, you will pass the renowned Kent Falls Brewing. You will also pass Anderson Acres Flower Farm before you meet back up with the lakeshore. After passing The Hopkins Inn & Restaurant and the Hopkins Vineyard, you will climb to the top of Tanner Hill where you will gaze over picturesque vistas of the lake. At the end, you can lunch at The Smithy Café just steps from the KC&E office!',
      image: images.tanner_hill,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lake to Warren Tour',
      Description:
        ' The Tanner Hill Tour will take you along the southern edge of Lake Waramaug before you turn inland toward Kent where you will pass picturesque properties, stonewalls, and forests. Along the way, you will pass the renowned Kent Falls Brewing. You will also pass Anderson Acres Flower Farm before you meet back up with the lakeshore. After passing The Hopkins Inn & Restaurant and the Hopkins Vineyard, you will ride to Warren, home to delicious sandwiches at Warren General Store. You will return home by way of Tanner Hill to take in views of Lake Waramaug, before having the option to enjoy a lunch at The Smithy Café if you did not get something in Warren!',
      image: images.lake_warren,
    },
  ];

  const _renderVerticalItem = ({item}) => {
    return (
      <CustomButton
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate(RoutesName.ROOM_BOOK);
        }}>
        <Block
          header
          shadow
          margin={[hp(1.4), wp(1)]}
          padding={[hp(2), wp(3)]}
          borderRadius={20}
          flex={false}>
          <ImageComponent
            // name="Location_Detail"
            name={item.image}
            width={330}
            height={130}
            radius={15}
          />
          <Block flex={false} margin={[hp(0.7), 0, 0, wp(5)]}>
            <Block center space={'between'} row flex={false}>
              <Text h3 bold color={'#323232'}>
                {item.title}
              </Text>
              <Button
                shadow
                onPress={() => navigation.navigate(RoutesName.LOCATION_DETAILS)}
                style={{width: wp(23), paddingVertical: hp(1)}}
                textStyle={{lineHeight: 15, marginTop: hp(0.3)}}
                size={13}
                color={'secondary'}>
                book
              </Button>
            </Block>

            <Block
              margin={[hp(1), 0, 0]}
              style={{width: wp(75)}}
              middle
              flex={false}>
              <Text h4 color={'#323232'} style={{backgroundcolor: 'black'}}>
                {item.Description}
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
            style={{width: wp(100), height: hp(30)}}
            center
            middle
            color="#374957"
            flex={false}>
            <Text h3 bold color={'#FFFFFF'} center style={{width: wp(90)}}>
              We found your location! Please pick the tour that best fits your
              interest and adventure level!
            </Text>
          </Block>
          <Block margin={[-hp(9), 0, 0]} flex={false}>
            <FlatList
              scrollEnabled={false}
              keyExtractor={item => item.id}
              // data={['All', 'America', 'Europe']}
              data={DATA}
              renderItem={_renderVerticalItem}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default LocationFound;
