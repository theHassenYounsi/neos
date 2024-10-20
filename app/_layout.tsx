import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, TouchableOpacity } from "react-native";
import { useMyStore } from "@/store/store";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
			<Stack
				screenOptions={{
					headerTitleAlign: "center",
					headerShown: false,
				}}
			>
				{/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
				<Stack.Screen name="index" />
				<Stack.Screen name="signup" />
				<Stack.Screen name="+not-found" />
			</Stack>
			<Toast />
			<StatusBar style="dark" />
		</ThemeProvider>
	);
}
