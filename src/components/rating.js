import React, {useState} from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ImageComponent, Text} from '_elements';
import { images } from 'src/assets';

const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}>
            <ImageComponent
              // style={{height: 60, width: 60}}
              name={item <= defaultRating ? 'filled_star' : 'corner_star'}
              height={60}
              width={60}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: 30,
  },
});
export default CustomRatingBar;
