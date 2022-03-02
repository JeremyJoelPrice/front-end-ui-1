import { v4 as uuid } from "uuid";
import { HeaderText, View } from "../../Components/Styled Components";
import BirdCard from "./BirdCard";

const Aviary = () => {
	const birdCards = [1, 2, 3, 4];
	return (
		<>
			<View>
				<HeaderText>User's Aviary</HeaderText>
			</View>
			<View>
				{birdCards.map((index) => {
					return (
						<BirdCard
							key={uuid()}
							name="bird name"
							imageUrl="https://cdn3.iconfinder.com/data/icons/spring-125/100/Pigeon-512.png"
							count={index}
						/>
					);
				})}
			</View>
		</>
	);
};

export default Aviary;
