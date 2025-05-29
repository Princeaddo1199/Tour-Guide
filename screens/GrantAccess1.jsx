/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function GrantAccess1({ navigation }) {
  return (
    <View style={styles.containerMain}>
      <View>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => navigation.navigate("moredetails")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          {/* <Ionicons name="arrow-back" size={24} color="#808080" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.imageArea}>
        <Image
          source={require("../assets/accessImg1.png")}
          style={styles.image}
        />
        <View style={styles.imageText}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
            Let Us Guide you Right Where You Are
          </Text>
          <Text
            style={{ width: 370, textAlign: "center", fontStyle: "italic" }}
          >
            We use your location to show nearby landmarks and guide you in
            real-time — just like having a personal tour guide beside you.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate("grantaccess2")}
        >
          <Text style={{ color: "#fff" }}>Grant Access</Text>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  imageArea: {
    alignItems: "center",
    marginTop: 100,
  },
  imageText: {
    alignItems: "center",
    marginTop: 60,
  },
  signUpBtn: {
    width: 300,
    height: 50,
    alignItems: "center",
    backgroundColor: "#FE8C00",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 180,
  },
});
