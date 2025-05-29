import { StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterScreen2 from "./screens/RegisterScreen2";
import GrantAccess1 from "./screens/GrantAccess1";
import GrantAccess2 from "./screens/GrantAccess2";
import HomeScreen from "./screens/HomeScreen"; // Assuming you have a HomeScreen component

const Stack = createNativeStackNavigator();

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);

  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {firstLaunch && (
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="moredetails" component={RegisterScreen2} />
          <Stack.Screen name="grantaccess1" component={GrantAccess1} />
          <Stack.Screen name="grantaccess2" component={GrantAccess2} />
          <Stack.Screen name="homescreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
