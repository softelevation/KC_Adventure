import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {hp, wp} from './responsive';
import Block from './Block';
import Text from './Text';

import {defaultFontSize} from './theme/fontsize';
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
      color: '#000',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#FAFAFA',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 10,
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
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#FAFAFA',
      borderRadius: 5,
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
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 10,
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
  errorText,
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
          error={error}
          regular
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
        style={{marginRight: wp(2)}}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel || (
          <ImageComponent
            height={10}
            width={14}
            name={!toggleSecure ? 'eye' : 'eye'}
          />
        )}
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
    color && {color: color},
    !editable && {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000',
    },
    style,
  ];
  const primaryInputStyles = [
    styles.primaryInput,
    color && {color: color},
    !editable && {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#000',
    },
    style,
  ];

  if (primary) {
    return (
      <Block
        flex={false}
        borderColor={error ? 'red' : 'transparent'}
        margin={[hp(1), 0, 0]}
        borderWidth={error ? 1 : 0}>
        {renderLabel()}
        <Block
          flex={false}
          row
          style={styles.shadow}
          center
          // padding={[0, wp(2)]}
          primary
          space={'between'}>
          <TextInput
            placeholder={placeholder}
            style={[
              primaryInputStyles,
              secure ? {width: wp(73)} : {width: wp(85)},
            ]}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            editable={editable}
            autoCorrect={false}
            keyboardType={inputType}
            placeholderTextColor={
              placeholderTextColor ? placeholderTextColor : '#000'
            }
            {...rest}
          />
          {errorText && error && (
            <Text size={12} errorColor>
              {errorText}
            </Text>
          )}
          {renderToggle()}
        </Block>
      </Block>
    );
  }

  return (
    <>
      <Block
        flex={false}
        borderRadius={16}
        borderColor={error ? 'red' : 'transparent'}
        borderWidth={error ? 1 : 0}
        margin={[hp(1), 0, 0]}>
        {renderLabel()}
        <TextInput
          placeholder={placeholder}
          style={inputStyles}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          editable={editable}
          autoCorrect={false}
          keyboardType={inputType}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : '#000'
          }
          {...rest}
        />

        {renderToggle()}
      </Block>
      {errorText && error && (
        <Text white semibold margin={[hp(0.7), wp(2), 0]} size={14}>
          {errorText}
        </Text>
      )}
    </>
  );
};

export default Input;
