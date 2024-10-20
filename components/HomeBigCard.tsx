import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
	title: string;
	date: string;
	value: number | string;
	currency: string;
	units: number | string;
};

const HomeCardBig = ({
	title,
	date,
	value,
	currency = "TND",
	units,
}: Props) => {
	const getInt = (val: number) => Math.floor(val);
	const getDecimalString = (val: number, decimals: number) =>
		val.toFixed(decimals).split(".")[1] || "00";

	return (
		<View style={styles.container}>
			{/* the background texture */}
			<View style={styles.backgroundContainer}>
				<Image
					source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image
					style={styles.backgroundImage}
				/>
			</View>
			{/* the Top items */}
			<View style={styles.topContainer}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.dateText}>{date}</Text>
			</View>
			{/* the bottom items */}
			<View style={styles.bottomContainer}>
				{/* the price container */}
				<View style={styles.priceContainer}>
					<Text style={styles.iconPlaceholder}>$</Text>{" "}
					{/* Placeholder for DolarIcon */}
					<View style={styles.priceTextContainer}>
						<Text style={styles.intText}>
							{getInt(Number(value)).toLocaleString()}
						</Text>
						<Text style={styles.decimalText}>
							.{getDecimalString(Number(value), 2)}
						</Text>
						<Text style={styles.currencyText}>{currency}</Text>
					</View>
				</View>
				{/* units container */}
				<View style={styles.unitsContainer}>
					<Text style={styles.iconPlaceholder}>🛒</Text>{" "}
					{/* Placeholder for CartIcon */}
					<Text style={styles.unitsText}>{units}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 100,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		gap: 20,
		padding: 20,
		backgroundColor: "#007acc", // Replace with your primary color
		borderRadius: 12,
		overflow: "hidden",
	},
	backgroundContainer: {
		height: 0,
		overflow: "visible",
		width: "150%",
		right: "-50%",
		top: "-300%",
	},
	backgroundImage: {
		opacity: 0.1,
		position: "absolute",
		transform: [{ rotate: "-25deg" }],
	},
	topContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "stretch",
		alignItems: "baseline",
	},
	titleText: {
		color: "#fff", // White text
		fontSize: 24, // Replace with your typography.xl.fontSize
		fontWeight: "600", // Semibold
	},
	dateText: {
		textAlign: "right",
		color: "#fff",
		fontSize: 14, // Replace with your typography.sm.fontSize
		fontWeight: "400", // Normal font weight
	},
	bottomContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "stretch",
	},
	priceContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	priceTextContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "baseline",
		gap: 2,
	},
	intText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 24, // Replace with your typography.xl.fontSize
	},
	decimalText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 12, // Replace with your typography.xs.fontSize
	},
	currencyText: {
		color: "#fff",
		fontSize: 12, // Replace with your typography.xs.fontSize
		fontWeight: "400", // Normal font weight
	},
	unitsContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	unitsText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 24, // Replace with your typography.xl.fontSize
	},
	iconPlaceholder: {
		fontSize: 24, // Replace with the icon size
		color: "#FFD700", // Replace with your secondary color
	},
});

export default HomeCardBig;
