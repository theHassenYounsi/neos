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
import Toast from "react-native-toast-message";
export const MyLogo = () => {
	return (
		<Svg width="260" height="100" viewBox="0 0 525 329" fill="none">
			<Path
				d="M20 186.5C9.2 216.9 2.5 286.833 0.5 318C7 295.167 23.3 240.1 36.5 202.5C49.7 164.9 73.3333 138.833 83.5 130.5C82.3333 135.167 79.5 149.1 77.5 167.5C75 190.5 74 208.5 77.5 255C80.3 292.2 88.3333 319.5 92 328.5C104 297.5 134.6 221.9 161 167.5C194 99.5 234 57.5 260 32.5C280.8 12.5 298.667 2.83333 305 0.5C294 2 258.5 16.1 204.5 60.5C150.5 104.9 115.667 180.667 108 205.5C107.167 197.833 111.5 162.9 111.5 144.5C111.5 126.1 115.833 88.1667 118 71.5C104.5 76 83.5 89 67 107C50.7264 124.753 33.5 148.5 20 186.5Z"
				fill="#FFA141"
			/>
			<Path
				d="M251.266 252.949C248.207 252.738 244.621 252.527 240.508 252.316C236.395 252.105 232.65 252 229.275 252H174.854L174.379 244.09L184.504 241.559C184.715 241.031 184.873 239.66 184.979 237.445C185.189 235.23 185.348 232.383 185.453 228.902C185.559 225.422 185.611 221.52 185.611 217.195V193.939C185.611 189.615 185.559 185.66 185.453 182.074C185.348 178.488 185.189 175.641 184.979 173.531C184.873 171.316 184.715 169.998 184.504 169.576L174.379 167.045L174.854 159.135H223.58C225.689 159.135 228.221 159.135 231.174 159.135C234.232 159.029 237.186 158.924 240.033 158.818C242.986 158.607 245.465 158.449 247.469 158.344L251.74 181.758L242.564 183.023L236.711 169.102C235.234 168.785 233.969 168.574 232.914 168.469C231.859 168.363 230.699 168.311 229.434 168.311H217.41C215.406 168.311 213.455 168.363 211.557 168.469C209.764 168.469 208.287 168.574 207.127 168.785C207.127 169.629 207.074 170.895 206.969 172.582C206.969 174.27 206.916 176.432 206.811 179.068C206.811 181.705 206.811 184.764 206.811 188.244V221.625C206.811 225 206.811 228.006 206.811 230.643C206.916 233.279 206.969 235.494 206.969 237.287C207.074 239.08 207.127 240.451 207.127 241.4C209.025 241.611 210.977 241.77 212.98 241.875C215.09 241.98 217.727 242.033 220.891 242.033H229.434C232.07 242.033 234.021 242.033 235.287 242.033C236.658 241.928 237.66 241.822 238.293 241.717C239.031 241.611 239.822 241.506 240.666 241.4L249.367 225.58L258.385 227.32L251.266 252.949ZM231.016 220.359L229.592 209.76C228.854 209.654 227.641 209.602 225.953 209.602C224.371 209.496 222.578 209.443 220.574 209.443H212.189C210.291 209.443 208.551 209.496 206.969 209.602C205.387 209.707 204.174 209.812 203.33 209.918V198.686C204.174 198.791 205.387 198.896 206.969 199.002C208.551 199.107 210.291 199.16 212.189 199.16H220.574C222.578 199.16 224.371 199.16 225.953 199.16C227.641 199.055 228.854 199.002 229.592 199.002L231.016 188.402H239.875V220.359H231.016ZM317.236 253.424C307.533 253.424 298.885 251.42 291.291 247.412C283.803 243.404 277.896 237.92 273.572 230.959C269.354 223.893 267.244 215.824 267.244 206.754C267.244 197.262 269.354 188.824 273.572 181.441C277.896 174.059 283.855 168.258 291.449 164.039C299.043 159.82 307.639 157.711 317.236 157.711C326.729 157.711 335.061 159.715 342.232 163.723C349.404 167.625 354.994 173.057 359.002 180.018C363.115 186.979 365.172 195.1 365.172 204.381C365.172 212.502 363.695 219.621 360.742 225.738C357.789 231.855 353.887 236.971 349.035 241.084C344.289 245.197 339.121 248.309 333.531 250.418C327.941 252.422 322.51 253.424 317.236 253.424ZM318.344 241.717C323.301 241.717 327.414 240.451 330.684 237.92C333.953 235.283 336.379 231.486 337.961 226.529C339.648 221.467 340.492 215.402 340.492 208.336C340.492 200.215 339.438 193.148 337.328 187.137C335.324 181.125 332.424 176.484 328.627 173.215C324.936 169.84 320.506 168.152 315.338 168.152C308.166 168.152 302.523 171.158 298.41 177.17C294.297 183.182 292.24 191.514 292.24 202.166C292.24 209.971 293.348 216.826 295.562 222.732C297.777 228.639 300.836 233.279 304.738 236.654C308.746 240.029 313.281 241.717 318.344 241.717ZM409.152 253.424C404.723 253.424 399.818 252.791 394.439 251.525C389.166 250.26 384.631 248.572 380.834 246.463L380.043 223.049L390.168 222.416L395.547 238.711C397.656 240.082 400.135 241.189 402.982 242.033C405.936 242.771 408.73 243.141 411.367 243.141C416.113 243.141 419.699 242.139 422.125 240.135C424.656 238.131 425.922 235.441 425.922 232.066C425.922 228.375 424.814 225.422 422.6 223.207C420.49 220.992 417.695 219.094 414.215 217.512C410.734 215.93 407.043 214.4 403.141 212.924C399.238 211.342 395.547 209.496 392.066 207.387C388.586 205.172 385.738 202.377 383.523 199.002C381.414 195.521 380.359 191.145 380.359 185.871C380.359 180.176 381.941 175.219 385.105 171C388.375 166.676 392.91 163.354 398.711 161.033C404.617 158.607 411.42 157.395 419.119 157.395C421.545 157.395 424.129 157.553 426.871 157.869C429.719 158.186 432.461 158.713 435.098 159.451C437.734 160.084 440.055 160.822 442.059 161.666L443.799 184.764L433.832 185.396L428.77 169.893C425.5 168.205 421.756 167.361 417.537 167.361C413.213 167.361 409.627 168.469 406.779 170.684C404.037 172.793 402.666 175.799 402.666 179.701C402.666 183.182 403.773 186.082 405.988 188.402C408.203 190.617 411.051 192.568 414.531 194.256C418.012 195.838 421.703 197.42 425.605 199.002C429.613 200.584 433.357 202.482 436.838 204.697C440.424 206.807 443.324 209.496 445.539 212.766C447.754 216.035 448.861 220.201 448.861 225.264C448.861 230.643 447.174 235.494 443.799 239.818C440.529 244.037 435.889 247.359 429.877 249.785C423.971 252.211 417.062 253.424 409.152 253.424Z"
				fill="#078CC0"
			/>
		</Svg>
	);
};

const index = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { auth, setAuth, setUser } = useMyStore();

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
				setAuth("auth");
				setUser(data.user);
				router.replace("/tabs");
			})
			.catch((error) => {
				console.error("Error:", error);
				Toast.show({ type: "error", text1: "failed to create user" });
			});
	};
	useEffect(() => {
		if (auth === "auth") router.replace("/tabs");
	}, [auth]);

	return (
		<View
			style={{
				paddingVertical: 150,
				paddingHorizontal: 10,
				gap: 10,
				alignItems: "center",
			}}
		>
			<MyLogo />
			<View style={{ flexDirection: "row", gap: 10 }}>
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

			<TouchableOpacity
				style={{
					backgroundColor: "#078CC0",
					paddingVertical: 12,
					borderRadius: 10,
					alignItems: "center",
					alignSelf: "stretch",
				}}
				onPress={() => {
					signup();
				}}
			>
				<Text style={{ fontSize: 16, color: "white" }}>Sign up</Text>
			</TouchableOpacity>
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
