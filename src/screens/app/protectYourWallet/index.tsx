import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {height, width} from '~utils';
import Header from '~components/header';

const ProtectYourWallet = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();

  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <Header active2 onPressBack={() => navigation.goBack()} />

        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Outfit-normal',
            fontWeight: '700',
            fontSize: width(6),
            color: '#040330',
            marginTop: width(5),
          }}>
          Protect Your Wallet
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3.5),
            alignItems: 'center',
            textAlign: 'justify',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            marginTop: width(2),
          }}>
          Use face ID for faster wallet access and allows more security to your
          wallet , set up and use now.
        </Text>
        <View style={styles.outerContainer}>
          <View style={styles.circle}>
            <Image source={require('../../../assets/images/Vector.png')} />
          </View>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Outfit-normal',
              fontWeight: '200',
              fontSize: width(4),
              color: '#040330',
              marginTop: width(2),
            }}>
            FACE ID
          </Text>
        </View>
        <Button
          color="#0040FF"
          style={{
            width: width(85),
            backgroundColor: 'white',
            borderColor: '#0040FF',
            borderWidth: width(0.5),
            marginTop: width(40),
            paddingVertical: width(2),
          }}
          onPress={
            ()=>navigation.navigate(ScreenNames.BIOMATRIC_AUTHENTICATION)
          }
          >
          Cancel
        </Button>
        <Button
          color="white"
          style={{
            marginTop: width(5),
            width: width(85),
            backgroundColor: '#0040FF',
            paddingVertical: width(2),
          }}
          // onPress={() => navigation.navigate(ScreenNames.WELCOME)}
          >
          Enable
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default ProtectYourWallet;
