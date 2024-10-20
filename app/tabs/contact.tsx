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
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .slice(0, 2) // Get first two initials
      .join(""); // Join initials without space
    return initials;
  };
  const Item = ({ names }: { names: string }) => {
    const initials = getInitials(names);
    return (
      <View
        style={{
          paddingBottom: 5,
          flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.navigate({ pathname: "/Profile", params: { name: names } });
          }}
        >
          <View style={styles.nameContainer}>
            <View style={styles.initialsContainer}>
              <Text style={styles.initialsText}>{getInitials(names)}</Text>
            </View>
            <Text style={styles.itemText}>{names}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
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
    fontSize: 18,
    fontWeight: "semibold",
  },

  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  initialsContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#078CC0",
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: "#fff",
    fontWeight: "semibold",
  },
});

export default contact;
