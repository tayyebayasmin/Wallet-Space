import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';
import {height, width} from '~utils';
import {scale} from 'react-native-size-matters';
import styles from './styles';

const Loader = () => {
  const [number, onChangeNumber] = useState(0);
  const ArrayOfPercentageImages = [
    {
      id: 1,
      uri: 'https://drive.google.com/uc?export=view&id=1UVQmJJKUm3u4CC2VDBE85zwOEE3GBSc1',
    },
    {
      id: 2,
      uri: 'https://drive.google.com/uc?export=view&id=1I9_bJBJCVQEiHL1Jl6XGTqkcSUdejMPp',
    },
    {
      id: 3,
      uri: 'https://drive.google.com/uc?export=view&id=1l66Os_p3XNtQO3cUFgA3O5jn4_fCyyZK',
    },
    {
      id: 4,
      uri: 'https://drive.google.com/uc?export=view&id=1GrCEvrR9bybZXxpoDMmj1vW8t4h_EZc_',
    },
    {
      id: 5,
      uri: 'https://drive.google.com/uc?export=view&id=1tEdnbh8trZPLLp7Ey5S51rAVoTtg4NnI',
    },
    {
      id: 6,
      uri: 'https://drive.google.com/uc?export=view&id=1TXHrRRWNlDZA321DmcsO7p1RsnX2G0p_',
    },
    {
      id: 7,
      uri: 'https://drive.google.com/uc?export=view&id=15gNdv9y9_qFpZDinfLnpfLyQBZvhh1lw',
    },
    {
      id: 8,
      uri: 'https://drive.google.com/uc?export=view&id=1VzJV2rX0bdSa5aMioilRIrbPfud-gsFZ',
    },
    {
      id: 9,
      uri: 'https://drive.google.com/uc?export=view&id=1kHYZX6kBmP_pApeHPUSXHPZN6-9OcJHn',
    },
    {
      id: 10,
      uri: 'https://drive.google.com/uc?export=view&id=1W5oEHZKc6ZTY-m86_wmVup5OBcdCPTa0',
    },
    {
      id: 11,
      uri: 'https://drive.google.com/uc?export=view&id=1-6qEkwCis2PGwBAPhSourWecr5I40mMT',
    },
    {
      id: 12,
      uri: 'https://drive.google.com/uc?export=view&id=17WHHvNfDjgzKsqM2I1XWl6eIIqMIXEyV',
    },
    {
      id: 13,
      uri: 'https://drive.google.com/uc?export=view&id=1DpgVfjxUUfwQNYzAAeUV8uPel8ZshP8q',
    },
    {
      id: 14,
      uri:'https://drive.google.com/uc?export=view&id=1CBNP9ClPQQzwSnXTewj8l4_SdeyC-EIJ',
    },
    {
      id: 15,
      uri: 'https://drive.google.com/uc?export=view&id=11EFOyAi7m0Z_vfbJi-dtGYVbAcTce-gT',
    },
    {
      id: 16,
      uri: 'https://drive.google.com/uc?export=view&id=1U150R4U2FG5gliKiOxNxqGFfo6O7a9XU',
    },
    {
      id: 17,
      uri: 'https://drive.google.com/uc?export=view&id=1W1V95_roDe-KFgXB19mLkWOAeLUKUHzX',
    },
    {
      id: 18,
      uri: 'https://drive.google.com/uc?export=view&id=13gqPxPz8PvDUF3Z4hCDeHHGzYsS_RWoC',
    },
    {
      id: 19,
      uri: 'https://drive.google.com/uc?export=view&id=1XBzSrr1rDmi-26ziRQ9tq0bAU5Z-LHVR',
    },
    {
      id: 20,
      uri: 'https://drive.google.com/uc?export=view&id=1U5xLyYi_Z7u-np-IWYwL7f0s_SmMcOFi',
    },
    {
      id: 21,
      uri: 'https://drive.google.com/uc?export=view&id=1HvhFqeMySSKUCMcc-J2lnhJWjdLnuZ9b',
    },
    {
      id: 22,
      uri: 'https://drive.google.com/uc?export=view&id=1IYWvbPFicGVs-9iKF9K21elCr8u3MIpE',
    },
    {
      id: 23,
      uri: 'https://drive.google.com/uc?export=view&id=1bvJAHI8UF8Fuu19pueWCTVkZKHrm15Cn',
    },
    {
      id: 24,
      uri: 'https://drive.google.com/uc?export=view&id=1VhINkXb0EmtFgPI8oDjZ4MR_l98FCcNW',
    },
    {
      id: 25,
      uri: 'https://drive.google.com/uc?export=view&id=1pQ-eRpiWpkYS_yk9w8G5wU5rpeBjZzCP',
    },
    {
      id: 26,
      uri: 'https://drive.google.com/uc?export=view&id=1XWFd49Ao5Wgke40bMXcGDtSvjQa7HXBC',
    },
    {
      id: 27,
      uri: 'https://drive.google.com/uc?export=view&id=1o0Xkmb_2GstBoja4y1qjPakmjRzmYREn',
    },
    {
      id: 28,
      uri: 'https://drive.google.com/uc?export=view&id=1bisKLJ39Ok20hm10-45wS7YZ7ysclm-m',
    },
    {
      id: 29,
      uri: 'https://drive.google.com/uc?export=view&id=1foLWYbvRdKEyQuBt-nZrVxBQfqrR704m ',
    },
    {
      id: 30,
      uri: 'https://drive.google.com/uc?export=view&id=1BazM9fs-MFKNlXdDTyW92_V09LcETP1B ',
    },
    {
      id: 31,
      uri: 'https://drive.google.com/uc?export=view&id=1WkP1jcNVAr36vCqq5JYSS3YONxcp9sF4 ',
    },
    {
      id: 32,
      uri: 'https://drive.google.com/uc?export=view&id=1lkk36ifoye4AI2TzTp6JBaNE_wZRcc1T ',
    },
    {
      id: 33,
      uri: 'https://drive.google.com/uc?export=view&id=1XnDfk83NsueC_mCJlAusMgIQ6kbB3Dvn ',
    },
    {
      id: 34,
      uri: 'https://drive.google.com/uc?export=view&id=105QxpehwTdsWWq-8rDIztN2lnkylo3_s ',
    },
    {
      id: 35,
      uri: 'https://drive.google.com/uc?export=view&id=1Xsby8hBsrRDUdVrOTGoTe6ZhTNhQLLie ',
    },
    {
      id: 36,
      uri: 'https://drive.google.com/uc?export=view&id=14u3qtKLh_aLgdQPV0CvtSxlxj3r6jRgE ',
    },
    {
      id: 37,
      uri: 'https://drive.google.com/uc?export=view&id=1SDGzDN8n1cQp0C4DKWaRwnmlZfM71uKE ',
    },
    {
      id: 38,
      uri: 'https://drive.google.com/uc?export=view&id=1cBQUtKOKdAxa2QTMdZ49l_Khdzn0caAs ',
    },
    {
      id: 39,
      uri: 'https://drive.google.com/uc?export=view&id=1eBtsGFZLABJZYllq97qyIffv78oCsZxW ',
    },
    {
      id: 40,
      uri: 'https://drive.google.com/uc?export=view&id=1XGq-4wtpOIzc3FaozM8qUMaDYQnX9htz ',
    },
    {
      id: 41,
      uri: 'https://drive.google.com/uc?export=view&id=1im8JGec8DoNeqG5SBIcHGvtpYCTKN4Ul ',
    },
    {
      id: 42,
      uri: 'https://drive.google.com/uc?export=view&id=1j7mOxyBKFHrMY_iwIFcny6Dz8j_w5d7X ',
    },
    {
      id: 43,
      uri: 'https://drive.google.com/uc?export=view&id=1fEPqJayAwwezsMiAfuLWJ97YsOvVF63i ',
    },
    {
      id: 44,
      uri: 'https://drive.google.com/uc?export=view&id=1IBzL20h2K1LfIxHC8Tl0loRusIquZqi5 ',
    },
    {
      id: 45,
      uri: 'https://drive.google.com/uc?export=view&id=1GFzZYVqqgKJQdbng0JLqS0YSnN5lkFbj ',
    },
    {
      id: 46,
      uri: 'https://drive.google.com/uc?export=view&id=1GFzZYVqqgKJQdbng0JLqS0YSnN5lkFbj ',
    },
    {
      id: 47,
      uri: 'https://drive.google.com/uc?export=view&id=1SwqAvkx44w8VEdOUkgn_vtOk41nfucV4 ',
    },
    {
      id: 48,
      uri: 'https://drive.google.com/uc?export=view&id=1Vbu5F66ek0kBc9jAeiBZMl_is2-oGkBU ',
    },
    {
      id: 49,
      uri: 'https://drive.google.com/uc?export=view&id=12YiKxkItUeqQQVizRnCCnkm1OgJpJrKo ',
    },
    {
      id: 50,
      uri: 'https://drive.google.com/uc?export=view&id=1nI98XgDBa5ymXRvyVy7QS3J8VWvVWX-0 ',
    },
    {
      id: 51,
      uri: 'https://drive.google.com/uc?export=view&id=1aKERsEKnWB28V-AhEUIY-lQVWH4Z2qNZ',
    },
    {
      id: 52,
      uri: 'https://drive.google.com/uc?export=view&id=1JX-6323nRzQzC2lfQ3pHg4P4fDQISGCc',
    },
    {
      id: 53,
      uri: 'https://drive.google.com/uc?export=view&id=1uhjQH-ZgSHFPncqEhN78hx28mNZxOv3F',
    },
    {
      id: 54,
      uri: 'https://drive.google.com/uc?export=view&id=1yZnLMV2CnFTX3PMfJueWQVlYwuVE-vIR',
    },
    {
      id: 55,
      uri: 'https://drive.google.com/uc?export=view&id=1mWFxJ2PuDZW7qopPHZqgPwpl6fTOHqg8',
    },
    {
      id: 56,
      uri: 'https://drive.google.com/uc?export=view&id=1XqYTJLAj8wVEhgjCqFleohriuP78hKDG',
    },
    {
      id: 57,
      uri:'https://drive.google.com/uc?export=view&id=1eXM-ri8EaMtDIXQ-AmnrJKD8Fy_kkbwj',
    },
    {
      id: 58,
      uri: 'https://drive.google.com/uc?export=view&id=1Tjl8CihK1PIqZRmtJBQC51bLOyExEkhm',
    },
    {
      id: 59,
      uri: 'https://drive.google.com/uc?export=view&id=15Fx87i-MC5tekExaslgJeW3Bv1w28hnj',
    },
    {
      id: 60,
      uri: 'https://drive.google.com/uc?export=view&id=1SLXHB8fbmEdXfHq5ZfpoeLyYJW6OGpWX',
    },
    {
      id: 61,
      uri: 'https://drive.google.com/uc?export=view&id=1O3bnaOag0Jcz1k4jpsL-DRMODTYXMGLa',
    },
    {
      id: 62,
      uri: 'https://drive.google.com/uc?export=view&id=1Spda-AndBRkDw0HvPcD9N2tcpXQPPCTI',
    },
    {
      id: 63,
      uri: 'https://drive.google.com/uc?export=view&id=17oAfoQkqvpwsFTzHa4bd67WP-o-Y7xQ-',
    },
    {
      id: 64,
      uri: 'https://drive.google.com/uc?export=view&id=1RXCeDh5UQCNtw-xGiwQjroAsGVUEQBwr',
    },
    {
      id: 65,
      uri: 'https://drive.google.com/uc?export=view&id=1ZIma8fT5eODct8awv4ScrSI7qo6tYbuF',
    },
    {
      id: 66,
      uri: 'https://drive.google.com/uc?export=view&id=1a0VZg7dFakqu8HOPX2ff2l9rJ_ityV1Y',
    },
    {
      id: 67,
      uri: 'https://drive.google.com/uc?export=view&id=1ajKMAuefozessgy3Vb39ILx0vBoStTME',
    },
    {
      id: 68,
      uri: 'https://drive.google.com/uc?export=view&id=1VtLb775UF0XrMQgsTnSXBb-_7wubYL-a',
    },
    {
      id: 69,
      uri: 'https://drive.google.com/uc?export=view&id=18Z0iub5uO0RAzH61jnrCczvipqhBJaIZ',
    },
    {
      id: 70,
      uri: 'https://drive.google.com/uc?export=view&id=1L1RS-enEOh79Hi0SmYG_IUPDTtyJLnnP',
    },
    {
      id: 71,
      uri: 'https://drive.google.com/uc?export=view&id=17IXL1BYjIWrRXVWjp4ac6xJs1oogxGDs',
    },
    {
      id: 72,
      uri: 'https://drive.google.com/uc?export=view&id=1LPHJNpZRmleB2nGkeJQEx7zR57kjIQS_',
    },
    {
      id: 73,
      uri: 'https://drive.google.com/uc?export=view&id=1xnFByd2gXhUhQ_T7L4V5R3mK_y9onP8d',
    },
    {
      id: 74,
      uri: 'https://drive.google.com/uc?export=view&id=1zEEJdUD2d6ZTRgNsREP4P7JT1UvULQ-Y',
    },
    {
      id: 75,
      uri: 'https://drive.google.com/uc?export=view&id=1MRJSivaiyMjKqEaXEuhs0C47Z2KgkL9F',
    },
    {
      id: 76,
      uri: 'https://drive.google.com/uc?export=view&id=1EFcvRyscGXvJEy7O7OVtaiAQQze4kHKi',
    },
    {
      id: 77,
      uri: 'https://drive.google.com/uc?export=view&id=1MP0dJzGWQd88NCHRHYAamKHWx6ar6v22',
    },
    {
      id: 78,
      uri: 'https://drive.google.com/uc?export=view&id=19si9W0U7wl1qBEp5RUUZu48LlpP_1zg1',
    },
    {
      id: 79,
      uri: 'https://drive.google.com/uc?export=view&id=1sUlRjWXsLTp3k4I3DoVchLveYCJKEBwa',
    },
    {
      id: 80,
      uri: 'https://drive.google.com/uc?export=view&id=1BXFVXKpea-ZZQRkimaTiSLBMm5__fxuH',
    },
    {
      id: 81,
      uri: 'https://drive.google.com/uc?export=view&id=16nhm7gRjUp_wIl7TdgeN2yrJlFbACMio',
    },
    {
      id: 82,
      uri: 'https://drive.google.com/uc?export=view&id=19nQli8aCM5B8Zjp7sbMeMMpUpOinSNZp',
    },
    {
      id: 83,
      uri: 'https://drive.google.com/uc?export=view&id=1MJ5luzL_x0NHtjI48MJVxDEY8ONPxnLu',
    },
    {
      id: 84,
      uri: 'https://drive.google.com/uc?export=view&id=1kXaKN2Sf38YXYMco0nSZKGNh_WFVUjy7',
    },
    {
      id: 85,
      uri: 'https://drive.google.com/uc?export=view&id=1X8U95qc4Gs8MtwDHvKLiKZAoRx57Owwf',
    },
    {
      id: 86,
      uri: 'https://drive.google.com/uc?export=view&id=1PCS6z7sZV_M_Ir2yZYdds33k9LwG0kvc',
    },
    {
      id: 87,
      uri: 'https://drive.google.com/uc?export=view&id=1AN41-4y-N-dsc0rTrOmZGJIVSuZg-Tta',
    },
    {
      id: 88,
      uri: 'https://drive.google.com/uc?export=view&id=1GN1wdcWshyFLsmcZnW3WrPbcL4IAlB5I',
    },
    {
      id: 89,
      uri: 'https://drive.google.com/uc?export=view&id=1Gm7n5iXCZJpaJgtHIsovt9e9nTxfm82J',
    },
    {
      id: 90,
      uri: 'https://drive.google.com/uc?export=view&id=1FV1WzKJDJs1pXnpQmE0q4410yqayVbPM',
    },
    {
      id: 91,
      uri: 'https://drive.google.com/uc?export=view&id=1c7mkRLsNS4ccfUX3VMwZ7nd1O7QTQpfX',
    },
    {
      id: 92,
      uri: 'https://drive.google.com/uc?export=view&id=1DL9FQfylmzK2SUqi9l2pFZCY6a7dVnJG',
    },
    {
      id: 93,
      uri: 'https://drive.google.com/uc?export=view&id=1ItLOaLEpTzue-HjPo2XYIWSPvYvlysv6',
    },
    {
      id: 94,
      uri: 'https://drive.google.com/uc?export=view&id=1DdJM_adn-ot7qe8PpLXqMiV-Yu0NSAkv',
    },
    {
      id: 95,
      uri: 'https://drive.google.com/uc?export=view&id=1npp95VaVPuPIY55fu_WMCzSXyMb6T8YX',
    },
    {
      id: 96,
      uri: 'https://drive.google.com/uc?export=view&id=1tY6zx0GhYOc9t9scGfDHywmLcGZ44MXU',
    },
    {
      id: 97,
      uri: 'https://drive.google.com/uc?export=view&id=1CVffRuM7Bdao_EN_sY7svtcRjXCTRdzD',
    },
    {
      id: 98,
      uri: 'https://drive.google.com/uc?export=view&id=1kzYBXFKtOteEwndrBxvjYbmNxHyn8sD-',
    },
    {
      id: 99,
      uri: 'https://drive.google.com/uc?export=view&id=1v8gB8NH7_TXEZK9FmAMAjG1-Bq-1UW1Q',
    },
    {
      id: 100,
      uri: 'https://drive.google.com/uc?export=view&id=1FuhQhZD4Ag06NcC3v7Mjqv72vRt-8IEK',
    },
    {
      id: 101,
      uri: 'https://drive.google.com/uc?export=view&id=1ar8xjksVNz8Hb6DYSOMVvBtbYvMMWwga',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <TextInput
        style={styles.input}
        onChangeText={value => {
          if (value != '') {
            onChangeNumber(0);
          }
          if (value >= 0 && value <= 100) {
            onChangeNumber(value);
          }
        }}
        value={number}
        placeholder="Enter Number Of Percentage"
        keyboardType="numeric"
      />
      {
        <Image
          style={{
            marginVertical: scale(100),
            width: scale(100),
            height: scale(100),
          }}
          source={{uri: ArrayOfPercentageImages[number]?.uri}}
        />
      }
    </View>
  );
};

export default Loader;
