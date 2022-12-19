import React from 'react';
import Header from 'src/common/header';
import {Block, hp, Text, wp} from '_elements';
import VideoPlayer from 'react-native-video-player';
import Checkbox from 'src/components/checkbox';

const Bikedetails = () => {
  return (
    <Block safearea={true} primary>
      <Header name="Bike Details" />
      <Block flex={false}>
        <VideoPlayer
          video={require('../../assets/icons/videokc.mp4')}
          autoplay={true}
          videoWidth={1600}
          videoHeight={900}
        />
        <Block flex={false}>
          <Block flex={false} margin={[hp(2), 0, 0, wp(3)]}>
            <Checkbox
              numberOfLabelLines={2}
              checked={true}
              labelStyle={{marginRight: wp(5), width: wp(90)}}
              label="Do you confirm that you have have watched
               an understood the video of bike operation"
            />
          </Block>
          <Text margin={[hp(2), 0, 0, wp(2)]} bold size={20}>
            Rules of the Road:
          </Text>
          <Block padding={[hp(1), wp(1)]} flex={false}>
            <Text margin={hp(1)}>
              ● {''} Always ride on the right side of the road (with traffic)
            </Text>
            <Text margin={hp(1)}>
              ● {''} Do not ride 2 abreast when there are cars around
            </Text>
            <Text margin={hp(1)}>● {''} Do not ride on the sidewalk</Text>
            <Text margin={hp(1)}>
              ● {''} Stop at ALL stop signs and stop lights
            </Text>
            <Text margin={hp(1)}>
              ● {''} Signal turns with your hands to cars
            </Text>
            <Text margin={hp(1)}>
              ● {''}
              <Text>
                Do not make aggressive or sudden movements or changes in
                direction when riding
              </Text>
            </Text>
            <Text margin={hp(1)}>● {''} Always wear your helmet</Text>
          </Block>
        </Block>
        <Block flex={false} margin={[hp(1), 0, 0, wp(3)]}>
          <Checkbox
            checked={true}
            labelStyle={{marginRight: wp(5)}}
            label="Do you agree to follow the rules of the road?"
          />
        </Block>
        <Text />
      </Block>
    </Block>
  );
};
export default Bikedetails;
