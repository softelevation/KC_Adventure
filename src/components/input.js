import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { hp, wp } from './responsive';
import Block from './Block';
import Text from './Text';

import { defaultFontSize, Regular } from './theme/fontsize';
import ImageComponent from './ImageComponent';

const componentStyles = () => {
  return StyleSheet.create({
    label: {
      marginBottom: hp(1),
    },
    input: {
      paddingVertical: hp(1.6),
      paddingHorizontal: wp(3),
      fontSize: defaultFontSize,
      fontFamily: Regular,
      color: '#000000',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      shadowColor:
        Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.5)',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 3,
    },
    toggle: {
      position: 'absolute',
      alignItems: 'flex-end',
      width: 16 * 2,
      height: 16 * 2,
      top: 16,
      right: 8,
    },
    primaryInput: {
      paddingVertical: hp(1.6),
      paddingHorizontal: wp(3),
      fontSize: defaultFontSize,
      color: '#000',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      fontFamily: Regular,
    },
    neomorph: {
      borderRadius: 16,
      shadowRadius: 1,
      backgroundColor: '#fff',
      marginTop: hp(0.3),
      marginHorizontal: wp(1),
      padding: 3,
    },
    shadow: {
      shadowColor:
        Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.5)',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 3,
    },
  });
};

const Input = ({
  email,
  rightLabel,
  label,
  phone,
  number,
  secure,
  error,
  style,
  rightStyle,
  onRightPress,
  placeholder,
  editable = true,
  center,
  placeholderTextColor,
  transparent,
  color,
  primary,
  rightIcon,
  neomorph,
  ...rest
}) => {
  const styles = componentStyles();
  const [toggleSecure, setToggleSecure] = useState(false);
  const renderLabel = () => (
    <Block flex={false}>
      {label ? (
        <Text
          h5
          error={error}
          semibold
          info
          center={center ? true : false}
          style={styles.label}
          black={!error}>
          {label}
        </Text>
      ) : null}
    </Block>
  );

  const renderToggle = () => {
    if (!secure) {
      return null;
    }
    return (
      <TouchableOpacity
        style={{ marginRight: wp(2) }}
        onPress={() => setToggleSecure(!toggleSecure)}>
        <Block flex={false} header>
          {rightLabel || (
            <ImageComponent
              height={18}
              width={18}
              name={!toggleSecure ? 'eye_off' : 'eye'}
            />
          )}
        </Block>
      </TouchableOpacity>
    );
  };

  const isSecure = toggleSecure ? false : secure;

  const inputType = email
    ? 'email-address'
    : number
      ? 'numeric'
      : phone
        ? 'phone-pad'
        : 'default';

  const inputStyles = [
    styles.input,
    color && { color: color },
    !editable && {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000',
    },
    style,
  ];
  const primaryInputStyles = [
    styles.primaryInput,
    color && { color: color },
    !editable && {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000',
    },
    style,
  ];

  const placeholderColor = error ? 'red' : placeholderTextColor;
  if (primary) {
    return (
      <Block flex={false} borderRadius={8} margin={[hp(1), 0, 0]}>
        {renderLabel()}
        <Block
          flex={false}
          row
          borderColor={error ? 'red' : 'transparent'}
          borderWidth={error ? 1 : 0}
          style={styles.shadow}
          center
          borderRadius={8}
          header
          space={'between'}>
          <TextInput
            placeholder={placeholder}
            style={[
              primaryInputStyles,
              secure ? { width: wp(73) } : { width: wp(85) },
            ]}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            editable={editable}
            autoCorrect={false}
            keyboardType={inputType}
            placeholderTextColor={placeholderColor ? placeholderColor : '#000'}
            {...rest}
          />

          {renderToggle()}
        </Block>
        {error && (
          <Text error medium margin={[hp(0.7), 0, 0]} size={14}>
            {error}
          </Text>
        )}
      </Block>
    );
  }

  return (
    <Block flex={false} >
      <Block borderRadius={8} flex={false} margin={[hp(1), 0, 0]}>
        {renderLabel()}
        <Block
          flex={false}
          borderRadius={8}
          borderColor={error ? 'red' : 'transparent'}
          borderWidth={error ? 1 : 0}>
          <TextInput
            placeholder={placeholder}
            style={inputStyles}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            editable={editable}
            autoCorrect={false}
            keyboardType={inputType}
            placeholderTextColor={placeholderColor ? placeholderColor : '#000'}
            {...rest}
          />
        </Block>

        {renderToggle()}
      </Block>
      {error && (
        <Text error medium margin={[hp(0.7), wp(2), 0]} size={14}>
          {error}
        </Text>
      )}
    </Block>
  );
};

export default Input;
