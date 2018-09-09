import {
  createStackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen'
import SplashScreen from './SplashScreen';

const App = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    Main: { screen: MainScreen },
  });
  
  export default App;