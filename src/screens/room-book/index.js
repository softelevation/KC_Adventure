import React, {useRef} from 'react';
import Header from 'src/common/header';
import {SignatureScreen} from 'src/components/signature';
import WebView from 'react-native-webview';
import {Block, Button, hp, ImageComponent, Input, Text, wp} from '_elements';
const BookRoom = ({text, onOK}) => {
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = signature => {
    console.log(signature);
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log('clear success!');
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = data => {
    console.log(data);
  };
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="room book" />

      <Block flex={false} margin={[hp(4), 0, 0]} padding={[0,wp(6)]}>
        <Input placeholder={'Enter Name'} label="Name" />

        <Input primary placeholder={'Enter '} label="Room Number" />

        <Text h5 semibold color={'#444444'}>
          Signature
        </Text>
        <SignatureScreen />
        <Block margin={[hp(5),0]} center flex={false}>
          <Button style={{width: wp(50)}} uppercase color={'primary'}>
            Start your search
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default BookRoom;
