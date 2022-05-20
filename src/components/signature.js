import React, {useRef, useState} from 'react';
import {StyleSheet,  View, Image} from 'react-native';
import Signature from 'react-native-signature-canvas';
import {Webview} from 'react-native-webview';
import {Block, hp ,Text} from '_elements';
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
    <Block flex={false}>
      {/* <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={{width: 335, height: 114}}
            source={{uri: signature}}
          />
        ) : null}
      </View> */}
      <Block style={{height: hp(15), marginBottom: hp(5) , marginTop:hp(5)}}  flex={false}>
      <Text h5 semibold color={'#444444'}>
          Signature
        </Text>
        <Signature
          ref={ref}
          style={{backgroundColor: '#fffff'}}
          descriptionText="Sign"
          clearText="Clear"
          confirmText="Save"
          webStyle={`
          .m-signature-pad {
            position: absolute;
            font-size: 10px;
            width: 700px;
            height: 400px;
            top: 50%;
            left: 30%;
            margin-left: -350px;
            margin-top: -200px;
            margin-bottom:100px;
            border: 1px solid #e8e8e8;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
          }
          .m-signature-pad--body {
            
          }
          `}
          onEnd={handleEnd}
          onOK={handleSignature}
          onEmpty={handleEmpty}
          onClear={handleClear}
          backgroundColor="rgb(255,255,255)"
          penColor={light.secondary}
          imageType="image/jpeg"
          minWidth={2}
          
        />
      </Block>
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
