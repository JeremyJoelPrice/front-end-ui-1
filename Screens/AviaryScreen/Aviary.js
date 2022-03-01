import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
	HeaderPanel,
	HeaderText,
	MainContent,
	StyledBirdCardList,
	View
} from "../../Components/Styled Components";
import BirdCard from "./BirdCard";
import FactCardsContext from "../../FactCardsContext";
import UserContext from "../../UserContext";
import { getFactCards } from "../../api";
import { extractBirdCards } from "../../utils";

const Aviary = ({ navigation }) => {
	const { factCards, setFactCards } = useContext(FactCardsContext);
	const { userId } = useContext(UserContext);
	const [birdCards, setBirdCards] = useState([]);

	useEffect(() => {
		getFactCards(userId).then((cards) => {
			setFactCards(cards);
			setBirdCards(extractBirdCards(cards));
		});
	}, []);

	return (
		<>
			<HeaderPanel>
				<HeaderText>User's Aviary</HeaderText>
			</HeaderPanel>
			{/* <MainContent> */}
				<StyledBirdCardList>
					{birdCards.map((card) => {
						return (
							<BirdCard key={uuid()} navigation={navigation} card={card} />
						);
					})}
				</StyledBirdCardList>
			{/* </MainContent> */}
		</>
	);
};

export default Aviary;
