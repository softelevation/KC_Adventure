import React from 'react';
import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {ScrollView, FlatList, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {images} from 'src/assets';
const LocationDetails = () => {
  const {params} = useRoute();
  const data = [
    {
      id: 1,
      type: 'Short Lake Tour',
      text: 'A short drive from Lake Waramaug, the New Preston Fall is a beautiful waterfall located on the Aspetuck River, behind the lovely shops of New Preston. It is easily visible from the roadside, but those who want a more in-depth view can walk to the small observation platform that is off of route 45. Visitors can get within 20 feet of the fall’s base and fully enjoy its natural beauty. Nearby picnic tables offer the perfect perch to enjoy the view.',
      image: images.short_lake,
      title: 'New Preston Water Fall',
    },
    {
      id: 2,
      type: 'Short Lake Tour',
      text: 'Named for Chief Waramaug of the Potatuck Native American tribe who wintered in the area, the Lake is a picturesque spot nestled in the hills of western CT. Fishing, boating, and swimming are popular activities, and the lake is especially pretty in the fall with the foliage surrounding it.',
      image: images.short_lake,
      title: 'Lake Waramaug',
    },
    {
      id: 3,
      type: 'Short Lake Tour',
      text: 'Anderson Acres is a 200 acre estate located in Kent, Connecticut. Its land has been in agricultural use since the early 1900s. After being tended to by three generations of the Anderson family, for whom the property is still named, the farm was purchased by the Saltz family in 2011. The land had been preserved with the help of the Weantinoge Land Trust. ',
      image: images.andreson_acres,
      title: 'Anderson Acres Flower Farm',
    },
    {
      id: 4,
      type: 'Short Lake Tour',
      text: 'Since 1847, the Hopkins Inn has hosted guests from around the country adn the world. With stunning views of the lake, the adjacent restaurant is know for its Austrian cuisine that is taken from the owner’s Austrian heritage. In summer, that patio is a great place to dine and the fire in the Tavern Room is a cozy spot in cooler weather!',
      image: images.hopkins_restaurant,
      title: 'Hopkins Inn & Restaurant',
    },
    {
      id: 5,
      type: 'Short Lake Tour',
      text: 'Founded by the eponymous family 225 years ago as a dairy farm, the farm was turned into a vineyard in 1979. Since then, it has produced award-winning whites, reds and sparkling wines. Hopkins Vineyard grows 11 varieties of grapes. Amazingly, the first in the Hopkins family lineage came over on the Mayflower! The vineyard offers wine flights daily in the spring, summer, and fall. ',
      image: images.hopkins_Vineyard,
      title: 'Hopkins Vineyard',
    },
    {
      id: 6,
      type: 'Short Lake Tour',
      text: 'The Smithy was constructed in the village’s historic black smith barn. It sources produce, meats, and speciality grocery items from local farms and vendors to provide exceptional sandwiches, snacks, and more! Just steps from our office, it is the perfect way to end a ride.',
      image: images.smithy_cafe,
      title: 'The Smithy Café',
    },
    {
      id: 7,
      type: 'Tanner Hill Tour',
      text: 'A short drive from Lake Waramaug, the New Preston Fall is a beautiful waterfall located on the Aspetuck River, behind the lovely shops of New Preston. It is easily visible from the roadside, but those who want a more in-depth view can walk to the small observation platform that is off of route 45. Visitors can get within 20 feet of the fall’s base and fully enjoy its natural beauty. Nearby picnic tables offer the perfect perch to enjoy the view.',
      image: images.tanner_hill,
      title: 'New Preston Water Fall',
    },
    {
      id: 8,
      type: 'Tanner Hill Tour',
      text: 'Named for Chief Waramaug of the Potatuck Native American tribe who wintered in the area, the Lake is a picturesque spot nestled in the hills of western CT. Fishing, boating, and swimming are popular activities, and the lake is especially pretty in the fall with the foliage surrounding it.',
      image: images.tanner_hill,
      title: 'Lake Waramaug',
    },
    {
      id: 9,
      type: 'Tanner Hill Tour',
      text: 'Sitting on land that has been used in agriculture for over 250 years, Kent Falls Brewing is one of the first farm breweries in CT! A dairy farm until 2012, the brewery has a mission to “produce beer reflective of the land around us, the people that occupy it and the culture we wish to promote.” The brewery sits on Camps Road Farm, which raises poultry, pork, hops, and cider apples, which are used by Neversink Spirits in New York.',
      image: images.kent_falls,
      title: 'Kent Falls Brewing',
    },
    {
      id: 10,
      type: 'Tanner Hill Tour',
      text: 'Anderson Acres is a 200 acre estate located in Kent, Connecticut. Its land has been in agricultural use since the early 1900s. After being tended to by three generations of the Anderson family, for whom the property is still named, the farm was purchased by the Saltz family in 2011. The land had been preserved with the help of the Weantinoge Land Trust. ',
      image: images.andreson_acres,
      title: 'Anderson Acres Flower Farm',
    },
    {
      id: 11,
      type: 'Tanner Hill Tour',
      text: 'Since 1847, the Hopkins Inn has hosted guests from around the country adn the world. With stunning views of the lake, the adjacent restaurant is know for its Austrian cuisine that is taken from the owner’s Austrian heritage. In summer, that patio is a great place to dine and the fire in the Tavern Room is a cozy spot in cooler weather!',
      image: images.hopkins_inn,
      title: 'Hopkins Inn & Restaurant',
    },
    {
      id: 12,
      type: 'Tanner Hill Tour',
      text: 'Founded by the eponymous family 225 years ago as a dairy farm, the farm was turned into a vineyard in 1979. Since then, it has produced award-winning whites, reds and sparkling wines. Hopkins Vineyard grows 11 varieties of grapes. Amazingly, the first in the Hopkins family lineage came over on the Mayflower! The vineyard offers wine flights daily in the spring, summer, and fall. ',
      image: images.hopkins_Vineyard,
      title: 'Hopkins Vineyard',
    },
    {
      id: 13,
      type: 'Tanner Hill Tour',
      text: 'This view from Tanner Hill is one of our favorite on this tour. In the distance you can see the Hopkins Vineyard to the right! And the lake below. ',
      image: images.tanner_hill,
      title: 'Tanner Hill',
    },
    {
      id: 14,
      type: 'Tanner Hill Tour',
      text: 'The Smithy was constructed in the village’s historic black smith barn. It sources produce, meats, and speciality grocery items from local farms and vendors to provide exceptional sandwiches, snacks, and more! Just steps from our office, it is the perfect way to end a ride.',
      image: images.smithy_cafe,
      title: 'The Smithy Café',
    },
    {
      id: 15,
      type: 'Lake to Warren Tour',
      text: 'A short drive from Lake Waramaug, the New Preston Fall is a beautiful waterfall located on the Aspetuck River, behind the lovely shops of New Preston. It is easily visible from the roadside, but those who want a more in-depth view can walk to the small observation platform that is off of route 45. Visitors can get within 20 feet of the fall’s base and fully enjoy its natural beauty. Nearby picnic tables offer the perfect perch to enjoy the view.',
      image: images.lake_warren,
      title: 'New Preston Water Fall',
    },
    {
      id: 16,
      type: 'Lake to Warren Tour',
      text: 'Named for Chief Waramaug of the Potatuck Native American tribe who wintered in the area, the Lake is a picturesque spot nestled in the hills of western CT. Fishing, boating, and swimming are popular activities, and the lake is especially pretty in the fall with the foliage surrounding it.',
      image: images.lake_warren,
      title: 'Lake Waramaug',
    },
    {
      id: 17,
      type: 'Lake to Warren Tour',
      text: 'Sitting on land that has been used in agriculture for over 250 years, Kent Falls Brewing is one of the first farm breweries in CT! A dairy farm until 2012, the brewery has a mission to “produce beer reflective of the land around us, the people that occupy it and the culture we wish to promote.” The brewery sits on Camps Road Farm, which raises poultry, pork, hops, and cider apples, which are used by Neversink Spirits in New York.',
      image: images.kent_falls,
      title: 'Kent Falls Brewing',
    },
    {
      id: 18,
      type: 'Lake to Warren Tour',
      text: 'Anderson Acres is a 200 acre estate located in Kent, Connecticut. Its land has been in agricultural use since the early 1900s. After being tended to by three generations of the Anderson family, for whom the property is still named, the farm was purchased by the Saltz family in 2011. The land had been preserved with the help of the Weantinoge Land Trust.',
      image: images.andreson_acres,
      title: 'Anderson Acres Flower Farm',
    },
    {
      id: 19,
      type: 'Lake to Warren Tour',
      text: 'Since 1847, the Hopkins Inn has hosted guests from around the country adn the world. With stunning views of the lake, the adjacent restaurant is know for its Austrian cuisine that is taken from the owner’s Austrian heritage. In summer, that patio is a great place to dine and the fire in the Tavern Room is a cozy spot in cooler weather!',
      image: images.hopkins_inn,
      title: 'Hopkins Inn & Restaurant',
    },
    {
      id: 20,
      type: 'Lake to Warren Tour',
      text: 'Founded by the eponymous family 225 years ago as a dairy farm, the farm was turned into a vineyard in 1979. Since then, it has produced award-winning whites, reds and sparkling wines. Hopkins Vineyard grows 11 varieties of grapes. Amazingly, the first in the Hopkins family lineage came over on the Mayflower! The vineyard offers wine flights daily in the spring, summer, and fall.',
      image: images.hopkins_Vineyard,
      title: 'Hopkins Vineyard',
    },
    {
      id: 21,
      type: 'Lake to Warren Tour',
      text: 'Named for Revolutionary War General Joseph Warren, Warren was first settled in 1737 and eventually became a town in 1786. By 1810, the agricultural heritage of the town was augmented by a new focus on education, with 5 private schools in the area. With just 1,400 people, the town is a quintessential New England hamlet.',
      image: images.lake_warren,
      title: 'Warren, CT',
    },
    {
      id: 22,
      type: 'Lake to Warren Tour',
      text: 'This view from Tanner Hill is one of our favorite on this tour. In the distance you can see the Hopkins Vineyard to the right! And the lake below. ',
      image: images.lake_warren,
      title: 'Tanner Hill',
    },
    {
      id: 23,
      type: 'Lake to Warren Tour',
      text: 'The Smithy was constructed in the village’s historic black smith barn. It sources produce, meats, and speciality grocery items from local farms and vendors to provide exceptional sandwiches, snacks, and more! Just steps from our office, it is the perfect way to end a ride.',
      image: images.smithy_cafe,
      title: 'The Smithy Café',
    },
  ];
  const _renderVerticalItem = ({item}) => {
    return (
      <Block safearea={true} primary>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {/* <ImageComponent
            // isURL
            name={data.image}
            width={wp(115)}
            height={208}
          /> */}
          <Image style={{height: 208, width: wp(100)}} source={item.image} />

          <Block flex={false} padding={[hp(1), wp(3)]}>
            <Text margin={[0, 0, hp(0.5)]} h3 bold color={'#323232'}>
              {item.title}
            </Text>
            <Text medium height={24} size={16} color={'#444444'}>
              {item.text}
            </Text>
          </Block>
        </ScrollView>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="Tour details" />
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
              data={data.filter(item => item.type === params.type)}
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
