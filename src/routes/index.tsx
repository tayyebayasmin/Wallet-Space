import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { selectIsLoggedIn } from '~store/slices/user';
import { ForgotPasswordScreen, LoginScreen } from '../screens/auth';
import ScreenNames from './routes';
import SecureWalletApp from '~screens/app/secureWalletApp';
import Welcome from '~screens/app/welcome';
import CraeteAccount from '~screens/app/createAccount';
import ProtectYourWallet from '~screens/app/protectYourWallet';
import Loader from '~screens/loader';
import BiomatricAuthentication from '~screens/app/biomatric';
import TransactionSuccessful from '~screens/app/transactionSuccessful';
import RestoreWallet from '~screens/app/restoreWallet';
import OldRestoreWallet from '~screens/app/oldRestoreWallet';
import BitcoinDeposit from '~screens/app/bitcoinDeposit';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      // setTimeout(() => {
        RNBootSplash.hide({fade: true, duration: 500});
      // }, 2000);   
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          headerShown:false,
        //   header: ({ navigation, route: { name } }) => <Appbar.Header>
        //     {navigation.canGoBack() && <Appbar.BackAction onPress={navigation.goBack} />}
        //     <Appbar.Content title={name} />
        //   </Appbar.Header>
        }}
        >
        {/* <Stack.Screen name={ScreenNames.LOADER} component={Loader} /> */}
        <Stack.Screen name={ScreenNames.SECURE_WALLET_APP} component={SecureWalletApp} />
        <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
        <Stack.Screen name={ScreenNames.CREATE_ACCOUNT} component={CraeteAccount} />
        <Stack.Screen name={ScreenNames.PROTECT_YOUR_WALLET} component={ProtectYourWallet} />
        <Stack.Screen name={ScreenNames.BIOMATRIC_AUTHENTICATION} component={BiomatricAuthentication} />
        <Stack.Screen name={ScreenNames.TRANSACTION_SUCCESSFUL} component={TransactionSuccessful} />
        <Stack.Screen name={ScreenNames.RESTORE_WALLET} component={RestoreWallet} />
        <Stack.Screen name={ScreenNames.OLD_RESTORE_WALLET} component={OldRestoreWallet} />
        <Stack.Screen name={ScreenNames.BITCOIN_DEPOSIT} component={BitcoinDeposit} />

        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={ScreenNames.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export { default as ScreenNames } from './routes';
