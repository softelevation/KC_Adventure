import React from 'react';
import Header from 'src/common/header';
import { Block, hp, ImageComponent, Text, wp } from '_elements';
import { ScrollView, FlatList } from 'react-native';
const LocationDetails = () => {
  const _renderVerticalItem = ({ item }) => {
    return (
      <Block safearea={true} primary>

        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <ImageComponent name="aboutus_img" width={wp(100)} height={208} />
          <Block flex={false} padding={[hp(2), wp(3)]}>
            <Text medium height={24} size={16} color={'#444444'}>
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
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="bike details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block center flex={false} >
          <Text spacing={1} height={27} gutterBottom width={wp(50)} center margin={[0, wp(10)]} bold size={18}>
            Before you get going let’s review some important information!
          </Text>
          <Block flex={false}>
            <FlatList
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              data={['All', 'America']}
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

