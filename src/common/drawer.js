import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Block, CustomButton, hp, ImageComponent, Text, wp} from '_elements';
import {RoutesName} from '_routeName';

const DrawerScreen = ({state}) => {
  const {index} = state;
  const {navigate} = useNavigation();
  const renderContent = (name, icon, active, onPress) => {
    return (
      <CustomButton
        onPress={onPress}
        color={active && 'rgba(255,255,255,0.2)'}
        activeOpacity={0.8}
        row
        center
        margin={[hp(2), 0, 0]}
        padding={[hp(1), 0, hp(1), wp(3)]}
        borderRadius={10}
        flex={false}>
        <ImageComponent name={icon} height={22} width={22} />
        <Text margin={[0, 0, 0, wp(5)]} medium h3 primary>
          {name}
        </Text>
      </CustomButton>
    );
  };
  return (
    <Block padding={[hp(25), wp(5)]} flex={1} secondary={true}>
      <Text margin={[0, 0, hp(2)]} semibold size={20} primary>
        Main Menu
      </Text>
      {renderContent('Home', 'home_icon', index === 0, () =>
        navigate(RoutesName.EXPERIENCES_SCREEN),
      )}
      {renderContent('My Wishlist', 'wishlist_icon', index === 1, () =>
        navigate(RoutesName.WISHLIST_SCREEN),
      )}
      {renderContent('About Us', 'about_icon', index === 2, () =>
        navigate(RoutesName.ABOUT_US_SCREEN),
      )}
      {renderContent('Terms & condition', 'terms_icon', index === 3, () =>
        navigate(RoutesName.TERMS_SCREEN),
      )}
      {renderContent('Notification', 'notifi_icon', index === 4, () =>
        navigate(RoutesName.NOTIFICATION_SCREEN),
      )}
      {renderContent('Help center', 'help_icon', index === 5, () =>
        navigate(RoutesName.HELP_SCREEN),
      )}
      {renderContent('Logout', 'logout_icon', false, () =>
        navigate(RoutesName.AUTH_STACK_SCREEN),
      )}
      {renderContent('Guide', '', false, () =>
        navigate(RoutesName.GUIDE_SCREEN),
      )}
    </Block>
  );
};

export default DrawerScreen;
