import { Pressable } from "react-native";
import { Text, ThumbnailImage, View } from "../../Components/Styled Components";

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
						<ThumbnailImage
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
