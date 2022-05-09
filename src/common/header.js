import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Block, CustomButton, hp, ImageComponent, Text} from '_elements';

const Header = ({name = ''}) => {
  const navigation = useNavigation();
  return (
    <Block row space={'between'} shadow primary flex={false} padding={[hp(2)]}>
      <CustomButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <ImageComponent name="menu_icon" height={24} width={24} />
      </CustomButton>
      <Text uppercase bold>
        {name}
      </Text>
      <ImageComponent name="notification_icon" height={24} width={24} />
    </Block>
  );
};

export default Header;
