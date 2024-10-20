import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Divider from "@/components/divider";
import { router } from "expo-router";

const contact = () => {
  const names = [
    "Ahmed Ben Salah",
    "Amira Chaouch",
    "Mohamed Ali Jebali",
    "Rim Harzallah",
    "Nadia Mansouri",
    "Walid Trabelsi",
    "Hichem Gharbi",
    "Sarra Bouzid",
    "Fares Hammami",
    "Khaled Mejri",
    "Sonia Messaoudi",
    "Zied Ben Youssef",
    "Hiba Jaziri",
    "Slim Khemiri",
    "Rania Saadi",
    "Nour Amri",
    "Sami Ferjani",
    "Leila Abidi",
    "Karim Elloumi",
    "Omar Kallel",
    "Yosra Haddad",
    "Mehdi Gaaloul",
    "Lina Guedri",
    "Nabil Mansour",
    "Syrine Louati",
    "Mounir Toumi",
    "Faten Bouzgarrou",
    "Saber Hamdi",
    "Fatma Sassi",
    "Imed Jlassi",
    "Safa Karoui",
    "Rached Souissi",
    "Manel Ghribi",
    "Aymen Ben Slimane",
    "Chahinez Lassoued",
    "Moez Gharbi",
    "Yasmine El Aouni",
    "Foued Maamri",
    "Nada Zouari",
    "Anis Ghannouchi",
    "Houda Baccar",
    "Mohamed Hamzaoui",
    "Selma Ben Othman",
    "Tahar Ghali",
    "Asma Dhibi",
    "Wissem Belhadj",
    "Radhia Ayed",
    "Ibrahim Boussaid",
    "Maha Ghedira",
    "Ilyes Aouini",
    "Kaouther Zidi",
    "Salem Dhahri",
    "Yassine Ferjani",
    "Rihab Brahim",
    "Marouene Ben Attia",
  ];
  const Item = ({ names }: { names: string }) => (
    <View style={{ paddingBottom: 5 }}>
      <TouchableOpacity
        onPress={() => {
          router.navigate({ pathname: "/Profile", params: { name: names } });
        }}
      >
        <Text style={{ ...styles.itemText, fontSize: 16, paddingTop: 5 }}>
          {names}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
      <FlatList
        data={names}
        renderItem={({ item }) => {
          return <Item names={item} />;
        }}
        ItemSeparatorComponent={() => {
          return <Divider />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: "#333",
  },
});

export default contact;
