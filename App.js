import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

function WelcomePage({ nameSetter }) {
    return (
      <View>
        <Text>Welcome!</Text>
        <Text>What can I call you?</Text>
        <TextInput onChangeText={(n) => nameSetter(n)}></TextInput>
      </View>
    )
}


function GetInfo({ name }) {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  )
}

function App() {
  const [name, nameSetter] = useState("");

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome">
          {() => <WelcomePage nameSetter={nameSetter}/>}
        </Tab.Screen>
        <Tab.Screen name="Hello">
          {() => <GetInfo name={name}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;








































// const Tab = createBottomTabNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="To-Do" component={TodoScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }
