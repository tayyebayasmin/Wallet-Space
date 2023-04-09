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
import HeaderText from '~components/header2';

const RestoreWallet = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();

  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <HeaderText
          title="Restore Wallet"
          onPressBack={() => navigation.goBack()}
        />

        <View style={styles.outerContainer}>
          <Image source={require('../../../assets/images/restore.png')} />
          <Text
            style={{
              fontFamily: 'Outfit-normal',
              fontWeight: '700',
              fontSize: width(5),
              color: '#0040FF',
              marginTop: width(5),
            }}>
            Restore your old wallet
          </Text>
          <Text
            style={{
              width:width(50),
              fontFamily: 'Outfit-normal',
              fontWeight: '400',
              fontSize: width(3.5),
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: 1,
              color: ' rgba(0, 64, 255, 0.51)',
              marginTop: width(2),
            }}>
            Type your 12- word secret backup phrase
          </Text>
        </View>

        <Button
          color="white"
          style={{
            marginTop: width(5),
            width: width(85),
            backgroundColor: '#0040FF',
            paddingVertical: width(2),
            position:'absolute',
            bottom:height(5)
          }}
          onPress={() => navigation.navigate(ScreenNames.OLD_RESTORE_WALLET)}
        >
          Next
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default RestoreWallet;
