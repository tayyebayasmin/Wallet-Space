import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {height, width} from '~utils';

const SecureWalletApp = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();

  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/largeLogo.png')}
        />
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '700',
            fontSize: width(6),
            color: '#0040FF',
            alignSelf: 'center',
            marginTop: width(20),
          }}>
          Secure Wallet App
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3),
            width: width(70),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            alignSelf: 'center',
            marginTop: width(5),
          }}>
          Crpto payments made easy and very{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3),
            width: width(70),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            alignSelf: 'center',
            marginTop: width(1),
          }}>
          Secure with space wallet{' '}
        </Text>
        <Button
        color='white'
        style={{backgroundColor:'#0040FF',marginTop:width(40),paddingVertical:width(2)}}
        onPress={()=>navigation.navigate(ScreenNames.WELCOME)}
        >
          Get Started
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default SecureWalletApp;
