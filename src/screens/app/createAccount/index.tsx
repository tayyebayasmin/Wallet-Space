import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {ScreenNames} from '~routes';
import styles from './styles';
import {width} from '~utils';
import Header from '~components/header';
import Clipboard from '@react-native-clipboard/clipboard';
//@ts-ignore
import Tags from 'react-native-tags';
const CraeteAccount = ({navigation}: NativeStackScreenProps<any>) => {
  const theme = useTheme();
  const [copiedText, setCopiedText] = useState('');
  const [tag, setTag] = useState([
    'Product',
    'Pattern',
    'Conduct',
    'Safe',
    'Ban',
    'Extravaganza',
    'consolation',
    'Position',
    'Desktop',
    'Battery',
    'Browser',
    'Portfolio',
  ]);
  const copyToClipboard = () => {
    Clipboard.setString(`${tag}`);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    console.log(copiedText)
  };

  return (
    <ScreenWrapper barStyle="dark-content" statusBarColor="white"  
    >
      <View style={styles.container}>
        <Header active1 onPressBack={() => navigation.goBack()} />
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Outfit-normal',
            fontWeight: '700',
            fontSize: width(7.5),
            color: '#0040FF',
            marginTop: width(4),
          }}>
          Create Account
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Outfit-normal',
            fontWeight: '200',
            fontSize: width(4),
            color: '#040330',
            marginTop: width(5),
          }}>
          Create Seed Phrase
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontFamily: 'Outfit-normal',
            fontWeight: '400',
            fontSize: width(3.2),
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 1,
            color: ' rgba(0, 64, 255, 0.51)',
            marginTop: width(2),
          }}>
          Write down or copy the phrase, or save it safely.
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
        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontFamily: 'Outfit-normal',
              fontWeight: 'bold',
              fontSize: width(6),
              color: '#040330',
              marginTop: width(5),
            }}>
            Copy To Clipboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.PROTECT_YOUR_WALLET)}
          style={{
            width: width(80),
            backgroundColor: '#0040FF',
            marginTop: width(25),
            padding: width(2),
            paddingVertical: width(5),
            alignItems: 'center',
            borderRadius: width(3),
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default CraeteAccount;
