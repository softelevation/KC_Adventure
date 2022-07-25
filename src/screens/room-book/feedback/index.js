import React, {useRef} from 'react';
import Header from 'src/common/header';
import {FlatList, ScrollView} from 'react-native';
import {Block, Button, hp, Input, Text, wp} from '_elements';
import {RoutesName} from '_routeName';
import Checkbox from 'src/components/checkbox';
import {useNavigation} from '@react-navigation/native';

const feedback = () => {
  const navigation = useNavigation();
  const _renderVerticalItem = ({item, index}) => {
    return (
      <Block flex={false} margin={[hp(1), 0, 0, wp(5)]}>
        <Checkbox
          checked={index === 0 ? true : false}
          labelStyle={{marginRight: wp(5)}}
          labelBefore
          label=" Lorem ipsum dolor sit amet, conse."
        />
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="feedback" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex={false} margin={[hp(6), 0, 0, wp(5)]}>
          <Text h5 bold color="#444444">
            How was your Experience
          </Text>
        </Block>
        <Block flex={false}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
            renderItem={_renderVerticalItem}
            showsHorizontalScrollIndicator={false}
          />
          <Block flex={false} margin={[hp(4), 0, hp(2)]} padding={[0, wp(6)]}>
            <Input
              style={{height: hp(15)}}
              multiline
              textAlignVertical="top"
              placeholder={'Write here...'}
              label="Leave a comment"
            />
            <Block
              flex={false}
              margin={[hp(10), 0, 0, 0]}
              space={'between'}
              row>
              <Button style={{width: wp(40)}} color={'secondary'}>
                dismiss
              </Button>
              <Button
                style={{width: wp(40)}}
                color={'primary'}
                onPress={() => {
                  navigation.navigate(RoutesName.PAYMENT_OPTIONS);
                }}>
                submit
              </Button>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default feedback;
