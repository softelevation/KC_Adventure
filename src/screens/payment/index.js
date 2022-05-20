import React, {useState} from 'react';
import Header from 'src/common/header';
import {FlatList, ScrollView} from 'react-native';
import {Block, Button, hp, Input, Text, wp, ImageComponent} from '_elements';
import Checkbox from 'src/components/checkbox';
import CommonStyles from 'src/assets/styles';
import {light} from 'src/components/theme/colors';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import {
  strictValidArrayWithLength,
  strictValidString,
} from 'src/utils/commonUtils';
import {Bold} from 'src/components/theme/fontsize';

const payment = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      header: 'Credit/Debit card',
      body: 'Doe',
      margin: 10,
      image: 'credit_icon',
    },
    {
      id: 2,
      header: 'UPI',
      margin: 10,
      body: [
        {
          name: 'Google Pay',
          icon: 'gpay_icon',
          height: 20,
          width: 50,
          radiooff: 'radio_off',
          radioon: 'radio_on',
        },
        {
          name: 'Phone Pay',
          icon: 'phonepe_icon',
          width: 88,
          height: 25,
          radiooff: 'radio_off',
          radioon: 'radio_on',
        },
        {
          name: 'BHIM',
          icon: 'bhim_icon',
          height: 22,
          width: 85,
          radiooff: 'radio_off',
          radioon: 'radio_on',
        },
        {
          name: 'Enter Your UPI Id',
          icon: 'upi_logo',
          height: 22,
          width: 60,
          radiooff: 'radio_off',
          radioon: 'radio_on',
        },
      ],
      image: 'upi_icon',
    },
    {
      id: 3,
      header: 'Wallet',
      body: 'Google Pay',
      margin: 10,
      image: 'wallet_icon',
    },
    {
      id: 4,
      header: 'Net banking',
      margin: 10,
    },
    {
      id: 5,
      header: 'Cash On Delivery',
      margin: 10,
      image: 'checkbox',
    },
    {
      id: 6,
      header: 'Other Methods',
      margin: 10,
    },
  ]);
  const _header = item => {
    return (
      <Block flex={false} column>
        <Block
          margin={[0, 0, hp(2)]}
          style={{width: wp(95)}}
          flex={false}
          borderWidth={[0, 0, 0.5, 0]}
          borderColor={'#F2F2F2'}
        />
        <Block flex={false} row center>
          {strictValidString(item.image) && item.image !== 'checkbox' && (
            <ImageComponent name={item.image} height={20} width={20} />
          )}
          {item.image === 'checkbox' ? (
            <Checkbox
              checkedComponent={
                <ImageComponent name="radio_on" height={40} width={40} />
              }
              uncheckedComponent={
                <ImageComponent name="radio_off" height={40} width={40} />
              }
              checked={false}
              label={'Cash On Delivery'}
              labelStyle={{fontFamily: Bold, color: '#6D6D6D', fontSize: 15}}
            />
          ) : (
            <Text margin={item.margin} color="#6D6D6D" bold size={15}>
              {item.header}
            </Text>
          )}
        </Block>
      </Block>
    );
  };

  const _body = item => {
    return (
      <Block>
        {strictValidArrayWithLength(item.body) ? (
          item.body.map((a, i) => {
            return (
              <Block
                center
                flex={false}
                padding={[hp(1), wp(4), 0, 0]}
                space="between"
                margin={[hp(1)]}
                row>
                <Checkbox
                  checkedComponent={
                    <ImageComponent name="radio_on" height={40} width={40} />
                  }
                  uncheckedComponent={
                    <ImageComponent name="radio_off" height={40} width={40} />
                  }
                  checked={i === 1 ? true : false}
                  label={a.name}
                />
                <ImageComponent
                  name={a.icon}
                  height={a.height}
                  width={a.width}
                />
              </Block>
            );
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: light.primary}}>
        <Block
          header
          shadow
          margin={[hp(2), wp(3)]}
          padding={[hp(2), wp(2)]}
          borderRadius={5}
          flex={false}>
          <Block flex={false} margin={[0, wp(1.5)]} row space={'between'}>
            <Text
              size={14}
              margin={[hp(0.5), 0, 0, 0]}
              regular
              color={'#000000'}>
              Coupon/Ongoing offer codes
            </Text>
            <Block flex={false} row center>
              <Text
                size={14}
                margin={[hp(0.5), wp(3), 0, 0]}
                semibold
                color={'#000000'}>
                View All
              </Text>
              <ImageComponent name="view_all" height={15} width={8} />
            </Block>
          </Block>
          <Input
            // secure
            primary
            primaryStyle={[CommonStyles.inputWithBorder]}
            placeholder={'Enter promo code here'}
            rightLabel={
              <Button
                style={{
                  width: wp(20),
                  marginLeft: -wp(14),
                  paddingVertical: hp(1),
                }}
                size={12}
                textStyle={{lineHeight: 15, textTransform: 'capitalize'}}
                color="primary">
                Apply
              </Button>
            }
          />
        </Block>
        <Block
          flex={false}
          header
          shadow
          padding={[hp(2), wp(2)]}
          borderRadius={10}>
          <Block flex={false} row space="between" padding={[0, wp(2)]} center>
            <Text size={16} semibold color={'#000000'}>
              Payment
            </Text>
            <Button
              style={{width: wp(23), paddingVertical: hp(1)}}
              textStyle={{lineHeight: 15, textTransform: 'capitalize'}}
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
      </ScrollView>
    </Block>
  );
};

export default payment;
