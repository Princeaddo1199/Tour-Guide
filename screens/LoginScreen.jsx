/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.containerMain}>
      <View style={styles.headerText}>
        <Text style={styles.headertextMain}>Welcome Back</Text>
        <Text>Please enter your details</Text>
      </View>
      <View style={styles.loginArea}>
        <TextInput
          placeholder="Email"
          style={[styles.textInput, emailFocused && styles.textInputFocused]}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          onChangeText={""}
        />
        <TextInput
          placeholder="Password"
          style={[styles.textInput, passwordFocused && styles.textInputFocused]}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          onChangeText={""}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginBtn} onPress={""}>
          <Text style={{ color: "#fff" }}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity style={styles.forgotPasswordBtn} onPress={""}>
          <Text style={{ color: "#FE8C00" }}>Forgotten Password?</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 60 }}>or log in with</Text>
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
      <View>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={{ color: "#FE8C00" }}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    marginTop: 40,
    backgroundColor: "#EAEAEA",
    flex: 1,
  },
  headerText: {
    alignItems: "center",
    marginTop: 100,
  },
  headertextMain: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: "#BDBDBD",
    borderRadius: 25,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 2, // Add borderWidth for borderColor to show
    borderColor: "transparent", // Default border color
  },
  textInputFocused: {
    borderColor: "#FE8C00", // Orange border on focus
  },
  loginArea: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  loginBtn: {
    width: 300,
    height: 50,
    alignItems: "center",
    backgroundColor: "#FE8C00",
    justifyContent: "center",
    borderRadius: 25,
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 30,
  },
  forgotPasswordBtn: {},
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
  footer: {
    alignItems: "center",
    marginTop: 170,
  },
});
