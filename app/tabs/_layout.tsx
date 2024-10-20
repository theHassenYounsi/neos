import { Redirect, router, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useMyStore } from "@/store/store";
import { Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const { auth, setAuth } = useMyStore();

	if (auth === "unauth") return <Redirect href={"/tabs/"} />;

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "gray",
				headerShown: true,
				headerRight: () => {
					return (
						<TouchableOpacity
							style={{ paddingRight: 20 }}
							onPress={() => {
								setAuth("unauth");
								router.replace("/");
							}}
						>
							<Text>logout</Text>
						</TouchableOpacity>
					);
				},
			}}
		>
			<Tabs.Screen
				name="flow"
				options={{
					title: "Flow",
					tabBarIcon: ({ color, focused }) => (
						<Svg
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill={focused ? "black" : "gray"}
						>
							<Path d="m482-200 114-113-114-113-42 42 43 43q-28 1-54.5-9T381-381q-20-20-30.5-46T340-479q0-17 4.5-34t12.5-33l-44-44q-17 25-25 53t-8 57q0 38 15 75t44 66q29 29 65 43.5t74 15.5l-38 38 42 42Zm165-170q17-25 25-53t8-57q0-38-14.5-75.5T622-622q-29-29-65.5-43T482-679l38-39-42-42-114 113 114 113 42-42-44-44q27 0 55 10.5t48 30.5q20 20 30.5 46t10.5 52q0 17-4.5 34T603-414l44 44ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</Svg>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Svg
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill={focused ? "black" : "gray"}
						>
							<Path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
						</Svg>
					),
				}}
			/>
			<Tabs.Screen
				name="contact"
				options={{
					title: "Contact",
					tabBarIcon: ({ color, focused }) => (
						<Svg
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill={focused ? "black" : "gray"}
						>
							<Path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80q45-56 109-88t141-32q77 0 141 32t109 88h70v-480H160v480h70Zm118 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-280q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 40Z" />
						</Svg>
					),
				}}
			/>
		</Tabs>
	);
}
