import React from 'react';
import {FlatList} from 'react-native';
import Block from './Block';
import {hp, wp} from './responsive';
import SkeletonComponent from './shimmer';

const DefaultSkeleton = ({data = [1]}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <Block margin={[hp(2), wp(5)]} flex={false}>
            <Block flex={false} space={'between'} row>
              <SkeletonComponent width={wp(17)} height={hp(2.5)} />
              <SkeletonComponent width={wp(17)} height={hp(2.5)} />
              <SkeletonComponent width={wp(17)} height={hp(2.5)} />
              <SkeletonComponent width={wp(17)} height={hp(2.5)} />
              <SkeletonComponent width={wp(17)} height={hp(2.5)} />
            </Block>
            <Block flex={false} margin={[hp(6), 0, 0]}>
              <SkeletonComponent width={wp(45)} height={hp(3.5)} />
              <Block
                flex={false}
                space={'between'}
                row
                margin={[hp(3), 0, 0, wp(1)]}>
                <SkeletonComponent
                  width={wp(47)}
                  height={hp(22)}
                  style={{marginTop: hp(1)}}
                />
                <SkeletonComponent
                  width={wp(38)}
                  height={hp(22)}
                  style={{marginTop: hp(1)}}
                />
              </Block>
            </Block>
            <Block flex={false} margin={[hp(4), 0, 0]}>
              <SkeletonComponent width={wp(40)} height={hp(3.5)} />
              <Block flex={false} center margin={[hp(2), 0, 0, wp(1)]}>
                <SkeletonComponent
                  width={wp(90)}
                  height={hp(15)}
                  style={{marginTop: hp(1)}}
                />
                <SkeletonComponent
                  width={wp(90)}
                  height={hp(15)}
                  style={{marginTop: hp(2)}}
                />
                <SkeletonComponent
                  width={wp(90)}
                  height={hp(15)}
                  style={{marginTop: hp(2)}}
                />
              </Block>
            </Block>
          </Block>
        );
      }}
    />
  );
};

export default DefaultSkeleton;
