import { View, Text } from "react-native";
import React from "react";
import HomeCardBig from "@/components/HomeBigCard";

const index = () => {
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <HomeCardBig
        title={"Balence"}
        date={"22/10/2023"}
        value={"111"}
        currency={"TND"}
      ></HomeCardBig>
    </View>
  );
};

export default index;
