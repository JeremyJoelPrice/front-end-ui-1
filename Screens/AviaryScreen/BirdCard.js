import { baseURL } from "../../api";
import {
	Pressable,
	Text,
	ThumbnailImage,
	View
} from "../../Components/Styled Components";

const BirdCard = ({ card, navigation }) => {
	const { bird_name, count } = card;
	const onPress = (e) => {
		navigation.navigate("OneBird");
	};

	return (
		<View>
			<Pressable onPress={onPress}>
				<View>
					<ThumbnailImage source={`${baseURL}/photo/${bird_name}/1`} />
				</View>
				<Text>{bird_name}</Text>
				<Text>{count} cards owned</Text>
			</Pressable>
		</View>
	);
};

export default BirdCard;
