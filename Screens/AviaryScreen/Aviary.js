import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
	AppContainer,
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
import { Navbar } from "../../Components/Navbar/Navbar";

const Aviary = ({ navigation }) => {
	const { factCards, setFactCards } = useContext(FactCardsContext);
	const { currentUser } = useContext(UserContext);
	const [birdCards, setBirdCards] = useState([]);

	useEffect(() => {
		getFactCards(currentUser.userId).then((cards) => {
			setFactCards(cards);
			setBirdCards(extractBirdCards(cards));
		});
	}, []);

	return (
		<AppContainer>
			<HeaderPanel>
				<HeaderText>{currentUser.username}'s Aviary</HeaderText>
			</HeaderPanel>
			<MainContent>
				<StyledBirdCardList>
					{birdCards.map((card) => {
						return (
							<BirdCard key={uuid()} navigation={navigation} card={card} />
						);
					})}
				</StyledBirdCardList>
			</MainContent>
			<Navbar navigation={navigation} />
		</AppContainer>
	);
};

export default Aviary;
