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

	const { setAuth } = useMyStore();

	return (
		<ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
			<Stack
				screenOptions={{
					headerRight: () => {
						return (
							<TouchableOpacity
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
				{/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="signup" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}
