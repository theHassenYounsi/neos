import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router } from "expo-router";
import Svg, { Path, Rect, Pattern, Use, Defs } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMyStore } from "@/store/store";

const Logo = () => {
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

const index = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { auth, setAuth } = useMyStore();

	const signup = () => {
		fetch("http://192.168.50.3:3000/users", {
			method: "POST",
			body: JSON.stringify({ firstName, lastName, email, password }),
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
			<View style={styles.imageContainer}>{Logo()}</View>
			<View style={{ flexDirection: "row" }}>
				<TextInput
					style={[styles.input, { flex: 1 }]}
					placeholder="first name"
					value={firstName}
					onChangeText={(e) => {
						setFirstName(e);
					}}
					autoCapitalize="none"
					inputMode="text"
				/>
				<TextInput
					style={[styles.input, { flex: 1 }]}
					placeholder="Last Name"
					value={lastName}
					onChangeText={(e) => {
						setLastName(e);
					}}
					autoCapitalize="none"
					inputMode="text"
				/>
			</View>
			<TextInput
				style={styles.input}
				placeholder="e-mail"
				value={email}
				onChangeText={(e) => {
					setEmail(e);
				}}
				autoCapitalize="none"
				inputMode="email"
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
				title="Sign Up"
				onPress={() => {
					signup();
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
