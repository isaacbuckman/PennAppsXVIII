import {
  createStackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen'

const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    Main: { screen: MainScreen },
  });
  
  export default App;