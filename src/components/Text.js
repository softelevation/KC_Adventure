import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {hp} from './responsive';
import {light} from './theme/colors';
import {
  bodyFontSize,
  defaultFontSize,
  headerFontSize,
  subtitleFontSize,
  titleFontSize,
} from './theme/fontsize';

const componentStyles = () => {
  return StyleSheet.create({
    // default style
    text: {
      fontSize: defaultFontSize,
      // fontFamily: Regular,
      color: '#1C2A39',
    },
    // variations
    uppercase: {
      textTransform: 'uppercase',
    },
    regular: {
      // fontFamily: Regular,
    },
    bold: {
      // fontFamily: Bold,
    },
    semibold: {
      // fontFamily: Medium,
    },
    thin: {
      // fontFamily: Thin,
    },
    underline: {
      textDecorationLine: 'underline',
    },
    capitalize: {
      textTransform: 'capitalize',
    },
    // position
    center: {textAlign: 'center'},
    right: {textAlign: 'right'},
    left: {textAlign: 'left'},
    // colors
    primary: {color: light.primary},
    secondary: {color: light.secondary},
    header: {color: light.header},
    subtitle: {color: light.subtitle},
    error: {color: light.warning},
    link: {color: light.link},
    warning: {color: light.warning},
    paragraph: {color: light.border},
    // // fonts
    h1: {fontSize: headerFontSize},
    h2: {fontSize: titleFontSize},
    h3: {fontSize: bodyFontSize},
    h4: {fontSize: defaultFontSize},
    h5: {fontSize: subtitleFontSize},
  });
};

const CustomText = ({
  // font-size
  h1,
  h2,
  h3,
  h4,
  h5,
  size,
  // colors
  primary,
  secondary,
  header,
  subtitle,
  error,
  link,
  warning,
  color,
  paragraph,
  // font Alignment
  center,
  right,
  align,
  left,
  // styling
  regular,
  bold,
  semibold,
  medium,
  weight,
  transform,
  uppercase,
  underline,
  thin,
  capitalize,
  // Font styling
  spacing,
  height,
  style,
  children,
  margin,
  gutterBottom,
  ...props
}) => {
  const styles = componentStyles();
  const handleMargins = () => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }
    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    h5 && styles.h5,
    gutterBottom && {marginBottom: hp(1)},
    size && {fontSize: size},
    transform && {textTransform: transform},
    subtitle && styles.subtitle,
    header && styles.header,
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    thin && styles.thin,
    center && styles.center,
    right && styles.right,
    left && styles.left,
    color && styles[color],
    link && styles.link,
    color && !styles[color] && {color},
    warning && styles.warning,
    primary && styles.primary,
    paragraph && styles.paragraph,
    secondary && styles.secondary,
    uppercase && styles.uppercase,
    underline && styles.underline,
    error && styles.error,
    capitalize && styles.capitalize,
    margin && {...handleMargins()},
    style, // rewrite predefined styles
  ];
  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
};

export default CustomText;
