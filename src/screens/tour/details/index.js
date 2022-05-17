import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {images} from 'src/assets';
import CommonStyles from 'src/assets/styles';
import Header from 'src/common/header';
import {useNavigation} from '@react-navigation/core';
import {RoutesName} from '_routeName';
import {Block, Button, hp, ImageComponent, Text, wp} from '_elements';
import {navigationRef} from 'src/routes/navigation-service';

const TourDetails = () => {
  const {navigate} = useNavigation();
  return (
    <Block safearea={true} primary>
      <Header name="Tour Details" menuIcon={false} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={images.aboutus_img}
          style={CommonStyles.tourImage}>
          <Block margin={[0, 0, -hp(4.5)]} flex={false} shadow>
            <ImageComponent
              name="aboutus_img"
              width={80}
              radius={80}
              height={80}
            />
          </Block>
        </ImageBackground>
        <Block flex={false} padding={[hp(2), wp(3)]}>
          <Block margin={[0, 0, hp(1.5)]} center flex={false} row>
            <Text uppercase bold size={16} spacing={1}>
              John Doe
            </Text>
            <ImageComponent name="star_icon" width={16} height={16} />
            <Text margin={[0, 0, 0, wp(1)]} h4 medium color={'#303030'}>
              4.3
            </Text>
          </Block>
          <Text size={16} medium color={'#444444'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non a leo
            felis, amet adipiscing gravida eget. Montes, amet turpis non neque
            venenatis in sed. Mauris venenatis sed et, cras. Quisque fermentum
            faucibus eget sit et nulla sodales. Tellus pellentesque dignissim
            malesuada in netus odio sed congue. Arcu, tempor ut posuere urna
            mauris. Est a risus, nisi nisi. Odio at vitae in massa diam habitant
            ullamcorper volutpat non.{'\n'}
            {'\n'} Lorem quam semper felis id quis laoreet pulvinar nunc proin.
            Ac ultrices imperdiet dictum aliquet eros egestas ultrices.
            Pellentesque lorem nunc quis posuere posuere. In volutpat.{'\n'}
            {'\n'} Duis at posuere ut morbi. Ac purus id donec vitae amet
            facilisi. Arcu ac volutpat, non eget integer pharetra in neque.
            Egestas habitant ultrices ac elit suscipit mattis morbi habitasse
            lorem.{'\n'}
            {'\n'} Interdum posuere neque in feugiat. Parturient ac accumsan
            ultrices suscipit enim nisl viverra dolor fames. Semper parturient
            pulvinar nec auctor lectus tempus quam. Dapibus eget sollicitudin
            dignissim pretium miInterdum posuere neque in feugiat. Parturient ac
            accumsan ultrices suscipit enim nisl viverra dolor fames. Semper
            parturient pulvinar nec auctor lectus tempus quam. Dapibus eget
            sollicitudin dignissim pretium mi
          </Text>
        </Block>
      </ScrollView>
      <Block flex={false} row space={'evenly'}>
        <Button style={{width: wp(42)}} uppercase color={'secondary'}>
          Skip
        </Button>
        <Button style={{width: wp(42)}} uppercase color={'primary'}>
          Get your Guide
        </Button>
      </Block>
    </Block>
  );
};

export default TourDetails;
