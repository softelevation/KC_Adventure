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
    setSign(null);
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
      margin={[hp(3), 0, 0]}
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

      <Text gutterBottom h5 semibold color={'#444444'}>
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
                  // border: none;
                  height:100px;
                  width:320px;
                  position:center;
                  margin-left:3px;
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
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 114,
    justifyContent: 'center',
    marginTop: 15,
    width: 335,
  },
  previewText: {
    backgroundColor: '#69B2FF',
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    width: 120,
  },
});
