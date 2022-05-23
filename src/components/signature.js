import React, {useRef, useState} from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';
import Signature from 'react-native-signature-canvas';
import {Webview} from 'react-native-webview';
import {Block, hp, wp, Text} from '_elements';
import {light} from './theme/colors';

export const SignatureScreen = () => {
  const [signature, setSign] = useState(null);
  const ref = useRef();

  const handleSignature = signature => {
    console.log(signature, 'signature');
    setSign(signature);
  };

  const handleEmpty = () => {};

  const handleClear = () => {
    setSignature(null);
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  const style = ` .m-signature-pad--body {
    border-radius:20px;
    background:#fff;
  }`;

  return (
    <Block
      flex={false}
      marginTop={hp(5)}
      padding={[0, wp(5)]}
      style={{height: hp(18)}}>
      {/* <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={{width: 335, height: 114}}
            source={{uri: signature}}
          />
        ) : null}
      </View> */}

      <Text h5 semibold color={'#444444'}>
        Signature
      </Text>
      <Signature
        ref={ref}
        bgHeight={100}
        // style={{
        //   shadowColor:
        //     Platform.OS === 'ios'
        //       ? 'rgba(0, 0, 0, 0.05)'
        //       : 'rgba(0, 0, 0, 0.5)',
        //   shadowOffset: {width: 0, height: 10},
        //   shadowOpacity: 1,
        //   shadowRadius: 10,
        //   elevation: 3,
        // }}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        onEnd={handleEnd}
        onEmpty={handleEmpty}
        onClear={handleClear}
        backgroundColor="rgb(255,255,255)"
        penColor={light.secondary}
        imageType="image/jpeg"
        scrollable={false}
        onOK={handleSignature}
        webStyle={`
                .m-signature-pad {
                  // flex: 1;
                  // box-shadow: none;
                  border-radius: 10px;
                  border: none;
                  height:100px;
                  width:320px;
                  positin:center;
                  marginleft:3px;
                  
                }
                .m-signature-pad--footer {
                  display: none;
                  
                }
                .m-signature-pad--body {
                  border: none;
                  
                }
                `}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
});
