import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Block, CustomButton, hp, ImageComponent, Text} from '_elements';
export const defaultPropGetter = () => ({});

const Header = ({
  name = '',
  menuIcon = true,
  rightText = false,
  onPressText = defaultPropGetter,
}) => {
  const navigation = useNavigation();
  return (
    <Block
      center
      row
      space={'between'}
      shadow
      header
      flex={false}
      padding={[hp(2)]}>
      {menuIcon ? (
        <CustomButton
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <ImageComponent name="menu_icon" height={24} width={24} />
        </CustomButton>
      ) : (
        <CustomButton onPress={() => navigation.goBack()}>
          <ImageComponent name="back_icon" width={8} height={15} />
        </CustomButton>
      )}
      <Text spacing={1} uppercase bold>
        {name}
      </Text>
      {rightText ? (
        <Text semibold onPress={onPressText}>
          {rightText}
        </Text>
      ) : (
        <ImageComponent name="notification_icon" height={24} width={24} />
      )}
    </Block>
  );
};

export default Header;
