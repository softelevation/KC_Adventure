import React, {useState} from 'react';
import Header from 'src/common/header';
import {Block, Button, hp, Text, wp} from '_elements';
import VideoPlayer from 'react-native-video-player';
import Checkbox from 'src/components/checkbox';
import {ScrollView} from 'react-native';
import {RoutesName} from '_routeName';
import {useNavigation} from '@react-navigation/native';

const Bikedetails = () => {
  const [state, setState] = useState(false);
  const [agree, setAgree] = useState(false);
  const {navigate} = useNavigation();
  return (
    <Block safearea={true} primary>
      <Header name="Bike Details" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
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
                checked={state}
                labelStyle={{marginRight: wp(5), width: wp(90)}}
                label="Do you confirm that you have have watched
               an understood the video of bike operation"
                numberOfLabelLines={2}
                onChange={() => setState(!state)}
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
              checked={agree}
              labelStyle={{marginRight: wp(5)}}
              label="Do you agree to follow the rules of the road?"
              onChange={() => setAgree(!agree)}
            />
          </Block>
          <Block flex={false} center margin={[hp(4), 0, 0, 0]}>
            <Button
              onPress={() => navigate(RoutesName.MAP_SCREEN)}
              disabled={state && agree === true ? false : true}
              style={{width: wp(40)}}
              color={'primary'}>
              Next
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};
export default Bikedetails;
