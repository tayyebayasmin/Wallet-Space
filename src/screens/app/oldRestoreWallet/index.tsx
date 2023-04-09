import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, { useState } from 'react';
//@ts-ignore
import Tags from 'react-native-tags';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import {height, width} from '~utils';
import HeaderText from '~components/header2';
import { ScreenNames } from '~routes';

const OldRestoreWallet = ({navigation}: NativeStackScreenProps<any>) => {
  const [tag, setTag] = useState([]);
  return (
    <ScreenWrapper translucent barStyle="dark-content">
      <View style={styles.container}>
        <HeaderText justify title="Restore Wallet" />
        <Text
          style={{
            width: width(80),
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3.7),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            marginTop: width(5),
          }}>
          Paste your secret phrase to restore your existing wallet
        </Text>
        <View style={styles.outerContainer}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollVew}>
        <Tags
          textInputProps={{
            placeholder: 'Write down the phrase',
          }}
          initialTags={tag}
          onChangeTags={(tags: any[]) => setTag(tags)}
          containerStyle={styles.container2}
          inputStyle={styles.activeText}
          renderTag={({
            tag,
            index,
            onPress,
          }: 
          {
            tag: any;
            index: any;
            onPress: any;
          }) => (
            <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
              <Text
                style={{
                  backgroundColor: '#0040FF',
                  color: 'white',
                  fontFamily: 'Outfit-normal',
                  fontWeight: '600',
                  fontSize: width(4),
                  padding: width(2),
                  margin: width(1),
                }}>
                {index + 1} {tag}
              </Text>
            </TouchableOpacity>
          )}
        />
        </ScrollView>
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
          // onPress={()=>)}
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
          onPress={() => navigation.navigate(ScreenNames.BITCOIN_DEPOSIT)}
        >
          Next
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default OldRestoreWallet;
