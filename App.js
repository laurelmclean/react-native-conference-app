import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen'
import ScheduleScreen from "./screens/ScheduleScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                title: "Derppp",
                headerShown: false,
            }}
            />
      <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
