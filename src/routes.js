import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Details } from './screens/Details';

const Stack = createNativeStackNavigator();

export function Routes() {
    return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
}