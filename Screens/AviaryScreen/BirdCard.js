import { baseURL } from "../../api";
import {
	FlexColumn,
	FlexRow,
	Pressable,
	SmallText,
	StyledBirdCard,
	Text,
	ThumbnailImage,
	TitleText,
	View
} from "../../Components/Styled Components";

const BirdCard = ({ card, navigation }) => {
	const { bird_name, count } = card;
	const onPress = (e) => {
		navigation.navigate("OneBird", { bird_name });
	};

	function capitalise(word) {
		return word.charAt(0) + word.substring(1).toLowerCase();
	}

	return (
		<StyledBirdCard>
			<Pressable onPress={onPress}>
				<FlexRow>
					<ThumbnailImage source={`${baseURL}/photo/${bird_name}/1`} />
				</FlexRow>
				<TitleText>
					{capitalise(bird_name.split(" ")[0]) +
						" " +
						capitalise(bird_name.split(" ")[1])}
				</TitleText>
				<SmallText>{count} cards owned</SmallText>
			</Pressable>
		</StyledBirdCard>
	);
};

export default BirdCard;
