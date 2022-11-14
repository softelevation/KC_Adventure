import React from 'react';

import Header from 'src/common/header';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {ScrollView} from 'react-native';
const AboutScreen = () => {
  return (
    <Block safearea={true} primary>
      <Header name="About Us" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ImageComponent name="aboutus_img" width={wp(100)} height={219} />
        <Block flex={false} padding={[hp(2), wp(3)]}>
          <Text gutterBottom bold size={16}>
            About Us
          </Text>
          <Text color={'#969696'}>
            The genesis of KC&E Adventures was a marriage of two peoples’
            passions and unending curiosity for travel, outdoor adventure, and
            the perspective and freedom they provide!
            {'\n'}
            {'\n'}The owners, Caitlin and Collin, both grew up in Connecticut
            only miles away from one another but did not intersect until their
            mid-twenties. Both had a deep passion for travel and exploration
            from an early age. Caitlin’s grandparents are from a small town
            outside of Naples, Italy. This, in part, led her to move to Italy,
            where she finished her undergraduate degree and continued to live,
            work, and explore for 7 years, even owning her own travel company
            along the way!
            {'\n'}
            {'\n'}Collin grew up with a pilot as a father. He was both a naval
            aviator and an airline pilot. In his formative years, Collin’s
            family traveled constantly throughout the United States and Europe.
            His extended family also happened to be based in Italy and Greece,
            which always lead to beautiful Mediterranean adventures. Collin
            completed his undergraduate degree in the midwest and then spent
            years traveling through the west re-exploring some of his favorite
            places under his own power and often on two wheels.{'\n'}
            {'\n'}Both Caitlin and Collin returned to CT coincidently at the
            same time to start the next chapters of their lives, not knowing
            where these new paths would lead them. Upon meeting, they quickly
            realized that they had just met their other half and moved to
            Vermont to start their next adventure together!{'\n'}
            {'\n'}Through the experience and inspiration of a series of jobs,
            they decided to start KC&E Adventures, which was then Kingdom
            Cycling and Experiences. From its humble beginnings offering only
            single day mountain bike tours through northern VT, the new company
            helped the couple begin to fall in love with the feeling of sharing
            their passions with others.{'\n'}
            {'\n'}They quickly expanded their team and offerings to provide
            services throughout New England and abroad for adventure seekers of
            all types, ages, and abilities!{'\n'}
            {'\n'}With a young daughter in tow now and a bright-looking future,
            Caitlin and Collin constantly are exploring and finding new ways to
            help more people explore the world in a locally-authentic fashion.
            {'\n'}
            {'\n'}
            There is nothing that gives them more joy than knowing that KC&E
            customers have had an amazing experience and that KC&E helped open
            their eyes to a new corner of the world!
          </Text>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default AboutScreen;
