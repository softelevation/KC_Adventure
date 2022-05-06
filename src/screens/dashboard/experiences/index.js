import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Block, CustomButton, hp, ImageComponent, Text, wp} from '_elements';

const Experiences = () => {
  const [active, setActive] = useState('All');
  const _renderItem = ({item}) => {
    return (
      <Block margin={[hp(3), wp(4), 0]} center flex={false}>
        <CustomButton onPress={() => setActive(item)} activeOpacity={1}>
          <Text
            bold={active === item}
            semibold={active !== item}
            color={active !== item ? '#A5A4A4' : '#000000'}
            gutterBottom>
            {item}
          </Text>
        </CustomButton>
        {active === item && (
          <Block
            secondary
            flex={false}
            style={{height: 10, width: 10, borderRadius: 10}}
          />
        )}
      </Block>
    );
  };
  const _renderHorizontalItem = ({item}) => {
    return (
      <Block
        style={{width: wp(47)}}
        primary
        shadow
        margin={[hp(3), wp(2), 0]}
        padding={[0, 0, hp(1)]}
        borderRadius={20}
        center
        flex={false}>
        <ImageComponent
          name="demo1_icon"
          width={179}
          height={156}
          radius={14}
        />
        <Block
          space={'between'}
          padding={[hp(0.5)]}
          margin={[hp(1.5), 0, 0]}
          flex={false}
          row>
          <Text style={{width: wp(38)}} h5 color={'#303030'}>
            Mountain Biking and Gravel Cycling at Kingdom Trails, VT
          </Text>
          <ImageComponent name="heart_icon" width={20} height={20} />
        </Block>
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <ScrollView>
        <Block
          row
          space={'between'}
          shadow
          primary
          flex={false}
          padding={[hp(2)]}>
          <ImageComponent name="menu_icon" height={24} width={24} />
          <Text uppercase bold>
            Experiences
          </Text>
          <ImageComponent name="notification_icon" height={24} width={24} />
        </Block>

        <Block flex={false}>
          <FlatList
            horizontal
            data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
            renderItem={_renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </Block>
        <Block margin={[hp(3), 0]} flex={false} padding={[0, wp(4)]}>
          <Text semibold h3>
            Top Experiences
          </Text>
          <Block margin={[hp(2), 0]} flex={false}>
            <FlatList
              contentContainerStyle={{marginBottom: hp(2)}}
              horizontal
              data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
              renderItem={_renderHorizontalItem}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
          <Text semibold h3>
            Top Rated
          </Text>
          <Block margin={[hp(2), 0]} flex={false}>
            <FlatList
              contentContainerStyle={{marginBottom: hp(2)}}
              // horizontal
              data={['All', 'America', 'Europe', 'Asia', 'Osenia']}
              renderItem={_renderHorizontalItem}
              showsHorizontalScrollIndicator={false}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Experiences;
