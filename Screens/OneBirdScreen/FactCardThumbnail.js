import {
	Pressable,
	StyledFactCardThumbnail,
	StyledEmptyFactCardThumbnail,
	Text,
	ThumbnailImage,
	FlexColumn,
	FactCardText,
	FlexRow
} from "../../Components/Styled Components";

import { baseURL } from "../../api";
import EmptyFactCardThumbnail from "./EmptyFactCardThumbnail";

const FactCardThumbnail = ({ factCard, navigation }) => {
	function onPress() {
		navigation.navigate("FactCard", {
			card_id: factCard.card_id,
			bird_name: factCard.bird_name
		});
	}

	if (factCard) {
		return (
			<Pressable onPress={onPress}>
				<StyledFactCardThumbnail>
					<FlexRow>
						<ThumbnailImage source={`${baseURL}/photo/${factCard.image_url}`} />
					</FlexRow>
					<FactCardText>
						{factCard.count} {factCard.count == 1 ? "copy" : "copies"} owned
					</FactCardText>
				</StyledFactCardThumbnail>
			</Pressable>
		);
	} else {
		return <EmptyFactCardThumbnail />;
	}
};

export default FactCardThumbnail;
