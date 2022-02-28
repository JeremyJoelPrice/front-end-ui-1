import { Image, Pressable } from "react-native";
import { Text, View } from "../../Components/Styled Components";

const BirdCard = ({ name, imageUrl, count = 1 }) => {
	return (
		<>
			<View>
				<Pressable
					onPress={() => {
						console.log("button pressed");
					}}
				>
					<View>
						<Image
							style={{
								width: 50,
								height: 50
							}}
							source={imageUrl}
						/>
					</View>
					<Text>{name}</Text>
					<Text>{count} cards owned</Text>
				</Pressable>
			</View>
		</>
	);
};

export default BirdCard;
