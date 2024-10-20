import { View, Text } from "react-native";
import React from "react";
import HomeCardBig from "@/components/HomeBigCard";
import { useMyStore } from "@/store/store";

const index = () => {
	const { userData } = useMyStore();
	return (
		<View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
			<HomeCardBig
				units={""}
				title={"Energie balance"}
				date={"20/10/2024"}
				value={userData?.balance as number}
				currency={""}
			></HomeCardBig>
		</View>
	);
};

export default index;
