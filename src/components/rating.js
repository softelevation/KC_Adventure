import React, {useState} from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Block, hp, ImageComponent, Text, wp} from '_elements';
import {images} from 'src/assets';

const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  // console.log(defaultRating);
  return (
    <>
      {maxRating.map(item => {
        return (
          <TouchableOpacity
            style={{padding:wp(1)}}
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
    </>
  );
};

export default CustomRatingBar;
