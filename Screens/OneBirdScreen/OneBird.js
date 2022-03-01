import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { HeaderPanel, HeaderText } from "../../Components/Styled Components";
import FactCardThumbnail from "./FactCardThumbnail";
import FactCardsContext from "../../FactCardsContext";

const OneBird = ({ navigation, route }) => {
	const bird_name = route.params.bird_name;
	const { factCards: allFactCards } = useContext(FactCardsContext);
	const factCards = allFactCards.filter((card) => card.bird_name === bird_name);

	return (
		<>
			<HeaderPanel>
				<HeaderText>{bird_name}</HeaderText>
			</HeaderPanel>
			<FactCardThumbnail factCard={factCards[0]} navigation={navigation} />
			<FactCardThumbnail factCard={factCards[1]} navigation={navigation} />
			<FactCardThumbnail factCard={factCards[2]} navigation={navigation} />
			<FactCardThumbnail factCard={factCards[3]} navigation={navigation} />
		</>
	);
};

export default OneBird;
