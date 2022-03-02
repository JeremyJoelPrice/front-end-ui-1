import { useContext, useEffect, useState } from "react";
import {
	AppContainer,
	HeaderPanel,
	HeaderText,
	LargeImage,
	MainContent,
	Text
} from "../../Components/Styled Components";
import { getFactCard, getFactPhoto } from "../../api";
import { Navbar } from "../../Components/Navbar/Navbar";

const FactCard = ({ navigation }) => {
	const [cardFact, setCardFact] = useState([]);

	useEffect(() => {
		getCardFact(userId).then((card) => {
			setCardFact(card);
		});
	}, []);

	return (
		<AppContainer>
			<HeaderPanel>
				<HeaderText>{factCard.bird_name}</HeaderText>
				<LargeImage source={getFactPhoto} />
				<Text>{factCard.fact}</Text>
			</HeaderPanel>
			<MainContent></MainContent>
			<Navbar navigation={navigation} />
		</AppContainer>
	);
};

export default FactCard;
