import { Navbar } from "../../Components/Navbar/Navbar";
import {
	AppContainer,
	FlexColumn,
	FlexRow,
	HalfVerticalBuffer,
	HeaderPanel,
	HeaderText,
	MainContent,
	MysterySubtext,
	MysteryText,
	Pressable,
	StyledMysteryFactCard,
	Text,
	VerticalBuffer
} from "../../Components/Styled Components";

const ResultsScreen = ({ navigation }) => {
	const onPress = () => {
		navigation.navigate("FactCard", {
			card_id: 2,
			bird_name: "ABBOTS BABBLER"
		});
	};

	return (
		<AppContainer>
			<HeaderPanel>
				<HeaderText>New Card Earned</HeaderText>
			</HeaderPanel>
			<MainContent>
				<HalfVerticalBuffer />
				<FlexRow>
					<Pressable onPress={onPress}>
						<StyledMysteryFactCard>
							<MysteryText>?</MysteryText>
							<MysterySubtext>Tap to reveal</MysterySubtext>
						</StyledMysteryFactCard>
					</Pressable>
				</FlexRow>
				<HalfVerticalBuffer />
			</MainContent>
			<Navbar navigation={navigation} />
		</AppContainer>
	);
};

export default ResultsScreen;
