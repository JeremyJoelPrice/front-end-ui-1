import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import {
	AppContainer,
	FlexRow,
	FormButton,
	FormContainer,
	HeaderPanel,
	HeaderText,
	LargeImage,
	MainContent,
	Pressable,
	Text,
	ThumbnailImage,
	UserPhoto,
	VerticalBuffer
} from "../../Components/Styled Components";

const PhotoUpload = ({ navigation }) => {
	const [loading, setLoading] = useState(false);

	function onPress() {
		setLoading((loading) => !loading);
	}

	function navigateToResultsScreen() {
		navigation.navigate("ResultsScreen");
	}

	return (
		<AppContainer>
			{loading ? (
				<>
					<HeaderPanel>
						<HeaderText>Photo Submitted</HeaderText>
					</HeaderPanel>
					<MainContent>
						<VerticalBuffer />
						<Text>Fetching results...</Text>
						<VerticalBuffer />
						<FlexRow>
							<Pressable onPress={navigateToResultsScreen}>
								<ThumbnailImage source={require("../../loading-wheel.gif")} />
							</Pressable>
						</FlexRow>
					</MainContent>
				</>
			) : (
				<>
					<HeaderPanel>
						<HeaderText>Photo Upload</HeaderText>
					</HeaderPanel>
					<MainContent>
						<VerticalBuffer />
						<FlexRow>
							<UserPhoto source="https://tasteofenglishtea.files.wordpress.com/2012/10/octpp1-cardinal.jpg" />
						</FlexRow>
						<FormContainer>
							<FlexRow>
								<FormButton onPress={onPress}>
									<Text>Submit</Text>
								</FormButton>
								<FormButton>
									<Text>Retake</Text>
								</FormButton>
							</FlexRow>
						</FormContainer>
					</MainContent>
				</>
			)}
			<Navbar navigation={navigation} />
		</AppContainer>
	);
};

export default PhotoUpload;
