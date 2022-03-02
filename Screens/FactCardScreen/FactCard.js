import { useContext, useEffect, useState } from "react";
import {
	View,
	HeaderText,
	LargeImage,
	Text
} from "../../Components/Styled Components";
import { baseURL } from "../../api";
import { getFactCards } from "../../api";
import UserContext from "../../UserContext";
import FactCardsContext from "../../FactCardsContext";
const FactCard = ({ route }) => {
	const bird_name = route.params.bird_name;
	const card_id = route.params.card_id;
	const { userId } = useContext(UserContext);
	const { factCards } = useContext(FactCardsContext);
	const factCard = factCards.filter((card) => card.card_id === card_id)[0];
	return (
		<>
			<View>
				<HeaderText>Fact Card</HeaderText>
			</View>
			<HeaderText> {bird_name}</HeaderText>
			<LargeImage source={`${baseURL}/photo/${factCard.image_url}`} />
			<Text>{factCard.fact}</Text>
		</>
	);
};
export default FactCard;
