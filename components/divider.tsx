import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = ({}) => {
  return (
    <View
      style={{
        height: 1,
        gap: 10,
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "gray",
        opacity: 0.2,
      }}
    ></View>
  );
};

export default Divider;

const styles = StyleSheet.create({});
