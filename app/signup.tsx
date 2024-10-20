import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Svg, { Path, Rect, Pattern, Use, Defs } from "react-native-svg";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const renderImage = () => {
    return (
      <Svg width="190" height="128" viewBox="0 0 190 128" fill="none">
        <Rect width="190" height="128" fill="url(#pattern0_7_6)" />
        <Defs>
          <Pattern
            id="pattern0_7_6"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          ></Pattern>
        </Defs>
      </Svg>
    );
  };
  return (
    <View
      style={{
        height: "100%",
        paddingVertical: 150,
        paddingHorizontal: 10,
        gap: 10,
      }}
    >
      <View style={styles.imageContainer}>{renderImage()}</View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        inputMode="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        color={"#078CC0"}
        title="Sign Up"
        onPress={() => {
          router.navigate("/tabs");
        }}
      />
      <View style={{ gap: 2 }}>
        <Text style={styles.bottomText}>Already have an account ?</Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/");
          }}
        >
          <Text style={styles.linkText}>Log in here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  imageContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  bottomText: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    fontWeight: "semibold",
  },
  linkText: {
    textAlign: "center",
    color: "#078CC0",
    fontWeight: "bold",
  },
});

export default index;
