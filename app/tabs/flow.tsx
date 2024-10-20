import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { router } from "expo-router";
import Divider from "@/components/divider";
type Contact = {
  name: string;
  email: string;
  amount: number;
};
const contacts: Contact[] = [
  { name: "Ahmed Ben Salah", email: "ahmed.bensalah@example.com", amount: 100 },
  { name: "Amira Chaouch", email: "amira.chaouch@example.com", amount: -150 },
  {
    name: "Mohamed Ali Jebali",
    email: "mohamed.jebali@example.com",
    amount: 200,
  },
  { name: "Rim Harzallah", email: "rim.harzallah@example.com", amount: -120 },
  { name: "Nadia Mansouri", email: "nadia.mansouri@example.com", amount: 180 },
  { name: "Walid Trabelsi", email: "walid.trabelsi@example.com", amount: -130 },
  { name: "Hichem Gharbi", email: "hichem.gharbi@example.com", amount: 250 },
  { name: "Sarra Bouzid", email: "sarra.bouzid@example.com", amount: -90 },
  { name: "Fares Hammami", email: "fares.hammami@example.com", amount: 160 },
  { name: "Khaled Mejri", email: "khaled.mejri@example.com", amount: 220 },
  {
    name: "Sonia Messaoudi",
    email: "sonia.messaoudi@example.com",
    amount: -170,
  },
  {
    name: "Zied Ben Youssef",
    email: "zied.benyoussef@example.com",
    amount: 210,
  },
  { name: "Hiba Jaziri", email: "hiba.jaziri@example.com", amount: -140 },
  { name: "Slim Khemiri", email: "slim.khemiri@example.com", amount: 95 },
  { name: "Rania Saadi", email: "rania.saadi@example.com", amount: -135 },
  { name: "Nour Amri", email: "nour.amri@example.com", amount: 175 },
  { name: "Sami Ferjani", email: "sami.ferjani@example.com", amount: -165 },
  { name: "Leila Abidi", email: "leila.abidi@example.com", amount: 155 },
  { name: "Karim Elloumi", email: "karim.elloumi@example.com", amount: 115 },
  { name: "Omar Kallel", email: "omar.kallel@example.com", amount: -190 },
  { name: "Yosra Haddad", email: "yosra.haddad@example.com", amount: 80 },
  { name: "Mehdi Gaaloul", email: "mehdi.gaaloul@example.com", amount: 125 },
  { name: "Lina Guedri", email: "lina.guedri@example.com", amount: -145 },
  { name: "Nabil Mansour", email: "nabil.mansour@example.com", amount: 155 },
  { name: "Syrine Louati", email: "syrine.louati@example.com", amount: -160 },
  { name: "Mounir Toumi", email: "mounir.toumi@example.com", amount: 100 },
  {
    name: "Faten Bouzgarrou",
    email: "faten.bouzgarrou@example.com",
    amount: -170,
  },
  { name: "Saber Hamdi", email: "saber.hamdi@example.com", amount: 130 },
  { name: "Fatma Sassi", email: "fatma.sassi@example.com", amount: -90 },
  { name: "Imed Jlassi", email: "imed.jlassi@example.com", amount: 140 },
  { name: "Safa Karoui", email: "safa.karoui@example.com", amount: -110 },
  { name: "Rached Souissi", email: "rached.souissi@example.com", amount: 180 },
  { name: "Manel Ghribi", email: "manel.ghribi@example.com", amount: -200 },
  {
    name: "Aymen Ben Slimane",
    email: "aymen.benslimane@example.com",
    amount: 250,
  },
  {
    name: "Chahinez Lassoued",
    email: "chahinez.lassoued@example.com",
    amount: -150,
  },
  { name: "Moez Gharbi", email: "moez.gharbi@example.com", amount: 160 },
  {
    name: "Yasmine El Aouni",
    email: "yasmine.elaouni@example.com",
    amount: -170,
  },
  { name: "Foued Maamri", email: "foued.maamri@example.com", amount: 190 },
  { name: "Nada Zouari", email: "nada.zouari@example.com", amount: -110 },
  {
    name: "Anis Ghannouchi",
    email: "anis.ghannouchi@example.com",
    amount: 180,
  },
  { name: "Houda Baccar", email: "houda.baccar@example.com", amount: -140 },
  {
    name: "Mohamed Hamzaoui",
    email: "mohamed.hamzaoui@example.com",
    amount: 120,
  },
  {
    name: "Selma Ben Othman",
    email: "selma.benothman@example.com",
    amount: 125,
  },
  { name: "Tahar Ghali", email: "tahar.ghali@example.com", amount: -130 },
  { name: "Asma Dhibi", email: "asma.dhibi@example.com", amount: 135 },
  { name: "Wissem Belhadj", email: "wissem.belhadj@example.com", amount: -140 },
  { name: "Radhia Ayed", email: "radhia.ayed@example.com", amount: 150 },
  {
    name: "Ibrahim Boussaid",
    email: "ibrahim.boussaid@example.com",
    amount: -155,
  },
  { name: "Maha Ghedira", email: "maha.ghedira@example.com", amount: 160 },
  { name: "Ilyes Aouini", email: "ilyes.aouini@example.com", amount: -165 },
  { name: "Kaouther Zidi", email: "kaouther.zidi@example.com", amount: 170 },
  { name: "Salem Dhahri", email: "salem.dhahri@example.com", amount: -175 },
  {
    name: "Yassine Ferjani",
    email: "yassine.ferjani@example.com",
    amount: 180,
  },
  { name: "Rihab Brahim", email: "rihab.brahim@example.com", amount: -185 },
  {
    name: "Marouene Ben Attia",
    email: "marouene.benattia@example.com",
    amount: 190,
  },
];

const Item = ({ contact }: { contact: Contact }) => {
  const amountColor = contact.amount < 0 ? "red" : "green";

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          router.navigate("/ContactDetails");
        }}
      >
        <Text style={styles.itemText}>{contact.name}</Text>
        <Text style={styles.itemDetail}>Email: {contact.email}</Text>
        <Text style={[styles.itemDetail, { color: amountColor }]}>
          Amount: {contact.amount} TND
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Flow = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Item contact={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  itemContainer: {
    paddingBottom: 5,
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemDetail: {
    fontSize: 14,
    color: "#555",
  },
});

export default Flow;
