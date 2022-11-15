import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {images} from 'src/assets';

const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const renderEmojis = () => {
    if (defaultRating === 1) {
      return (
        <Text margin={[hp(1), 0, 0, wp(2)]} size={30}>
          😐
        </Text>
      );
    } else if (defaultRating === 2) {
      return (
        <Text margin={[hp(1), 0, 0, wp(2)]} size={30}>
          😊
        </Text>
      );
    } else if (defaultRating === 3) {
      return (
        <Text margin={[hp(1), 0, 0, wp(2)]} size={30}>
          😀
        </Text>
      );
    } else if (defaultRating === 4) {
      return (
        <Text margin={[hp(1), 0, 0, wp(2)]} size={30}>
          😍
        </Text>
      );
    } else if (defaultRating === 5) {
      return (
        <Text margin={[hp(1), 0, 0, wp(2)]} size={30}>
          😍
        </Text>
      );
    }
    return null;
  };
  return (
    <>
      {maxRating.map(item => {
        return (
          <TouchableOpacity
            style={{padding: wp(1)}}
            onPress={() => setDefaultRating(item)}>
            <ImageComponent
              // style={{height: 60, width: 60}}
              name={item <= defaultRating ? 'filled_star' : 'corner_star'}
              // styles={{marginRight: wp(3)}}
              height={35}
              width={35}
            />
          </TouchableOpacity>
        );
      })}
      {renderEmojis()}
    </>
  );
};

export default CustomRatingBar;
