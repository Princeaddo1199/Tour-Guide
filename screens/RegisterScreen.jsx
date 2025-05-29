/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function RegisterScreen() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  return (
    <View style={styles.containerMain}>
      <View></View>
      <View style={styles.headerText}>
        <Text style={styles.headerTextPrimary}>Welcome to Explore!</Text>
        <Text style={styles.headerTextSecondary}>
          Let's create your account
        </Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          placeholder="Email"
          style={[styles.textInput, emailFocused && styles.textInputFocused]}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <TextInput
          placeholder="Enter Password"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          style={[styles.textInput, passwordFocused && styles.textInputFocused]}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={[
            styles.textInput,
            confirmPasswordFocused && styles.textInputFocused,
          ]}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpBtn} onPress={""}>
          <Text style={{ color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 80 }}>or continue with</Text>
      </View>
      <View style={styles.socials}>
        <TouchableOpacity onPress={""} style={styles.socialsBtn}>
          <Image
            source={require("../assets/google.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={""} style={styles.socialsBtn}>
          <Image
            source={require("../assets/facebook.png")}
            style={{ width: 25, height: 25, marginRight: 10 }}
          />
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  headerText: {
    alignItems: "center",
    marginTop: 100,
  },
  headerTextPrimary: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  signUpContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  headerTextSecondary: {},
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: "#BDBDBD",
    borderRadius: 25,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 2, // Add borderWidth for borderColor to show
    borderColor: "transparent",
  },
  textInputFocused: {
    borderColor: "#FE8C00", // Orange border on focus
  },
  signUpBtn: {
    width: 300,
    height: 50,
    alignItems: "center",
    backgroundColor: "#FE8C00",
    justifyContent: "center",
    borderRadius: 25,
  },
  socials: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  socialsBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    margin: 20,
    width: 120,
    height: 50,
    backgroundColor: "#BDBDBD",
  },
});
