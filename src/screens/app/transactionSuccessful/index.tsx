import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {height, width} from '~utils';
import Header from '~components/header';
import {WhiteContainer} from '~components';

const TransactionSuccessful = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper translucent barStyle="light-content">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/close.png')} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: width(5),
              fontFamily: 'Outfit-normal',
              fontWeight: '600',
              fontSize: width(5),
              color: 'white',
            }}>
            Transaction Successful
          </Text>
        </View>
        <WhiteContainer style={styles.whiteContainer} height={height(80)}>
          <View
            style={{
              height: height(30),
              width: width(80),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
              }}
              source={require('../../../assets/images/black.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '5%',
                left: '50%',
              }}
              source={require('../../../assets/images/orange.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '70%',
                left: '70%',
              }}
              source={require('../../../assets/images/blacks.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '70%',
              }}
              source={require('../../../assets/images/brown.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '30%',
                left: '70%',
              }}
              source={require('../../../assets/images/white.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '70%',
                left: '20%',
              }}
              source={require('../../../assets/images/white.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '10%',
                left: '40%',
              }}
              source={require('../../../assets/images/spr1.png')}
            />

            <Image
              style={{
                position: 'absolute',
                top: '90%',
                left: '50%',
              }}
              source={require('../../../assets/images/spr2.png')}
            />

            <Image
              style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
              }}
              source={require('../../../assets/images/spr3.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '10%',
                left: '70%',
              }}
              source={require('../../../assets/images/spr4.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '20%',
                left: '70%',
              }}
              source={require('../../../assets/images/org.png')}
            />
            <Image
              style={{
                position: 'absolute',
                top: '80%',
              }}
              source={require('../../../assets/images/pink.png')}
            />
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/success.png')}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Outfit-normal',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: width(7.5),
              color: '#040330',
              marginTop: width(10),
            }}>
            $1422.35
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-normal',
              fontWeight: '700',
              fontSize: width(3.5),
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: 1,
              color: '#040330',
              marginTop: width(4),
            }}>
            0.112 ETH
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-normal',
              fontWeight: '400',
              fontSize: width(3.5),
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: 1,
              color: '#040330',
              marginTop: width(4),
            }}>
            You have successfully transferred the amount to 0x32fgskscc2473bfbd
          </Text>

          <Button
            color="white"
            style={{
              marginTop: width(5),
              width: width(85),
              backgroundColor: '#0040FF',
              paddingVertical: width(2),
              position: 'absolute',
              bottom: width(5),
            }}
            // onPress={() => navigation.navigate(ScreenNames.WELCOME)}
          >
            Done
          </Button>
        </WhiteContainer>
      </View>
    </ScreenWrapper>
  );
};

export default TransactionSuccessful;
