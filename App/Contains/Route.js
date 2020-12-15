import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from './Splash'
import ChangeLanScreen from './ChangeLan'
import PolicyScreen from './Policy'
import LoginScreen from './Login'
import OtpScreen from './Otp'
import VerifyScreen from './Verify'
import PincodeScreen from './Pincode'
import PincodeVerifyScreen from './PincodeVerify'
import TouchIDScreen from './TouchID'

const MainNavigator = createStackNavigator({
  Splash: { screen: SplashScreen },
  ChangeLan: { screen: ChangeLanScreen },
  Policy: { screen: PolicyScreen },
  Login: { screen: LoginScreen },
  Otp: { screen: OtpScreen},
  Verify: { screen: VerifyScreen },
  Pincode: { screen: PincodeScreen },
  PincodeVerify: { screen: PincodeVerifyScreen },
  TouchID: { screen: TouchIDScreen }
},
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

const App = createAppContainer(MainNavigator);

export default App;