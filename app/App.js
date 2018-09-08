import {
  createStackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen'

const App = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: MainScreen },
  });
  
  export default App;