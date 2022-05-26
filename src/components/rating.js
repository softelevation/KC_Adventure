import React, {useState} from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ImageComponent, Text, wp} from '_elements';
import {images} from 'src/assets';

const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(5);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      {maxRating.map(item => {
        return (
          <ImageComponent
            // style={{height: 60, width: 60}}
            name={item <= defaultRating ? 'filled_star' : 'corner_star'}
            // styles={{marginRight: wp(3)}}
            height={30}
            width={30}
          />
        );
      })}
    </>
  );
};

export default CustomRatingBar;
