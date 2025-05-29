/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RegisterScreen({ navigation }) {
  // Track the state if textInput is focused and add borderColor
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  return (
    <View style={styles.containerMain}>
      <View>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => navigation.navigate("register")}
        >
          <Ionicons name="arrow-back" size={24} color="#808080" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerText}>
        <Text style={styles.headerTextPrimary}>A few more details</Text>
        <Text style={styles.headerTextSecondary}>
          Let's give your account some more personality
        </Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          placeholder="First Name"
          style={[styles.textInput, emailFocused && styles.textInputFocused]}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        <TextInput
          placeholder="Gender"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          style={[styles.textInput, passwordFocused && styles.textInputFocused]}
          secureTextEntry
        />
        <TextInput
          placeholder="Date of Birth"
          style={[
            styles.textInput,
            confirmPasswordFocused && styles.textInputFocused,
          ]}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate("grantaccess1")}
        >
          <Text style={{ color: "#fff" }}>Sign Up</Text>
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
  backbtn: {
    marginLeft: 20,
    marginTop: 20,
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
    marginTop: 300,
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
