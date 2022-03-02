import {
	Pressable,
	StyledFactCardThumbnail,
	StyledEmptyFactCardThumbnail,
	Text,
	ThumbnailImage
} from "../../Components/Styled Components";

import { baseURL } from "../../api";

const FactCardThumbnail = ({ factCard, navigation }) => {
	function onPress() {
		navigation.navigate("FactCard", {
			card_id: factCard.card_id,
			bird_name: factCard.bird_name
		});
	}

	if (factCard) {
		return (
			<StyledFactCardThumbnail>
				<Pressable onPress={onPress}>
					<ThumbnailImage source={`${baseURL}/photo/${factCard.image_url}`} />
					<Text>
						{factCard.count} {factCard.count == 1 ? "copy" : "copies"} owned
					</Text>
				</Pressable>
			</StyledFactCardThumbnail>
		);
	} else {
		return <StyledEmptyFactCardThumbnail />;
	}
};

export default FactCardThumbnail;
