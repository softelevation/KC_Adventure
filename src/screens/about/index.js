import React from 'react';

import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {ScrollView} from 'react-native';
const AboutScreen = () => {
  return (
    <Block safearea={true} primary>
      <Header name="About Us" />
      <ScrollView>
        <ImageComponent name="aboutus_img" width={wp(100)} height={208} />
        <Block flex={false} padding={[hp(2), wp(3)]}>
          <Text gutterBottom bold size={16}>
            About Us
          </Text>
          <Text color={'#969696'}>
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
    </Block>
  );
};

export default AboutScreen;
