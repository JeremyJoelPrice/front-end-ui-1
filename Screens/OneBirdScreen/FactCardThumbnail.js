import { Pressable } from "react-native";
import {
	StyledFactCardThumbnail,
	Text
} from "../../Components/Styled Components";

const FactCardThumbnail = ({ factCard }) => {
	return (
		<StyledFactCardThumbnail>
			<Pressable
				onPress={() => {
					console.log("fact card pressed");
				}}
			>
				<Text>Fact card for {factCard.bird_name}</Text>
			</Pressable>
		</StyledFactCardThumbnail>
	);
};

export default FactCardThumbnail;
