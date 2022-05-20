import React, {useState} from 'react';
import Header from 'src/common/header';
import {FlatList, ScrollView} from 'react-native';
import {Block, Button, hp, Input, Text, wp, ImageComponent} from '_elements';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import {strictValidArrayWithLength} from 'src/utils/commonUtils';

const payment = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      header: 'Credit/Debit card',
      body: 'Doe',
      image: 'credit_icon',
    },
    {
      id: 2,
      header: 'UPI',
      body: [
        {
          name: 'Google Pay',
        },
        {
          name: 'Phone Pay',
        },
        {
          name: 'BHIM',
        },
        {
          name: 'Enter Your UPI Id',
        },
      ],
      image: 'upi_icon',
    },
    {
      id: 3,
      header: 'Wallet',
      body: 'Google Pay',
      image: 'wallet_icon',
    },
    {
      id: 4,
      header: 'Net banking',
      body: 'Cash On Delivery',
    },
    {
      id: 5,
      header: 'Other Methods',
      body: 'Cash On Delivery',
    },
  ]);
  const _header = item => {
    return (
      <Block flex={false} row center>
        <ImageComponent name={item.image} height={20} width={20} />
        <Text color="#6D6D6D" bold size={15}>
          {item.header}
        </Text>
      </Block>
    );
  };

  const _body = item => {
    return (
      <Block>
        {strictValidArrayWithLength(item.body) ? (
          item.body.map(a => {
            return <Text>{a.name}</Text>;
          })
        ) : (
          <Text>{item.body}</Text>
        )}
      </Block>
    );
  };
  return (
    <Block safearea={true} primary>
      <Header menuIcon={false} name="payment option" />
      <Block
        header
        shadow
        margin={[hp(2), wp(2)]}
        padding={[hp(2), wp(2)]}
        borderRadius={20}
        flex={false}>
        <Block flex={false} row space={'between'}>
          <Text size={14} regular color={'#000000'}>
            Coupon/Ongoing offer codes
          </Text>
          <Text size={14} semibold color={'#000000'}>
            View All
          </Text>
        </Block>
        <Input placeholder={'Enter promo code here'} />
      </Block>
      <Block
        flex={false}
        header
        shadow
        margin={[hp(2), 0, 0, 0]}
        padding={[hp(2), wp(2)]}
        borderRadius={20}>
        <Block flex={false} row space="between" padding={[0, wp(2)]} center>
          <Text size={16} semibold color={'#000000'}>
            Payment
          </Text>
          <Button
            style={{width: wp(23), paddingVertical: hp(1)}}
            textStyle={{lineHeight: 15}}
            size={12}
            color={'primary'}>
            Add new
          </Button>
        </Block>
        <AccordionList
          list={items}
          header={_header}
          body={_body}
          keyExtractor={item => `${item.id}`}
        />
      </Block>
    </Block>
  );
};

export default payment;
