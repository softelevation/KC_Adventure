import {View, Text} from 'react-native';
import React from 'react';
import Header from 'src/common/header';
import {Block} from '_elements';

const TourDetails = () => {
  return (
    <Block safearea={true} primary>
      <Header name="Tour Details" menuIcon={false} />
    </Block>
  );
};

export default TourDetails;
