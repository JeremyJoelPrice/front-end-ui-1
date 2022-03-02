import {
	HeaderPanel,
	HeaderText,
	LargeImage,
	Text
} from "../../Components/Styled Components";

const FactCard = ({
	factCard = {
		bird_name: "bird",
		fact: "birds are real",
		imageUrl:
			"https://cdn3.iconfinder.com/data/icons/spring-125/100/Pigeon-512.png"
	}
}) => {
	return (
		<HeaderPanel>
			<HeaderText>{factCard.bird_name}</HeaderText>
			<LargeImage source={factCard.imageUrl} />
			<Text>{factCard.fact}</Text>
		</HeaderPanel>
	);
};

export default FactCard;
