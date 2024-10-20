import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Redirect, router } from "expo-router";
import Svg, { Path, Rect, Pattern, Use, Defs } from "react-native-svg";
import { useMyStore } from "@/store/store";

const index = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { auth, setAuth } = useMyStore();

	const login = () => {
		fetch("http://192.168.50.3:3000/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.status >= 400) throw new Error("failed");

				return response.json();
			})
			.then((data) => {
				console.log("Success:", data);
				setAuth("auth");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	if (auth === "auth") return <Redirect href={"/tabs/"} />;

	return (
		<View
			style={{
				height: "100%",
				paddingVertical: 150,
				paddingHorizontal: 10,
				gap: 10,
			}}
		>
			<TextInput
				style={styles.input}
				placeholder="email"
				value={email}
				onChangeText={(e) => {
					setEmail(e);
				}}
				autoCapitalize="none"
				inputMode="text"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={(e) => {
					setPassword(e);
				}}
				secureTextEntry
			/>
			<Button
				color={"#078CC0"}
				title="Sign In"
				onPress={() => {
					login();
				}}
			/>
			<View style={{ gap: 2 }}>
				<Text style={styles.bottomText}>Don't have an account yet?</Text>
				<TouchableOpacity
					onPress={() => {
						router.navigate("/signup");
					}}
				>
					<Text style={styles.linkText}>Create an account</Text>
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
