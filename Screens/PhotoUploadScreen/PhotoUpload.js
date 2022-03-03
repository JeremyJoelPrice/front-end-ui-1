import { Navbar } from "../../Components/Navbar/Navbar";
import {
	AppContainer,
	FlexRow,
	FormButton,
	FormContainer,
	HeaderPanel,
	HeaderText,
	MainContent,
	Text,
	UserPhoto,
	VerticalBuffer
} from "../../Components/Styled Components";

const PhotoUpload = ({ navigation }) => {
	return (
		<AppContainer>
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
						<FormButton>
							<Text>Submit</Text>
						</FormButton>
						<FormButton>
							<Text>Retake</Text>
						</FormButton>
					</FlexRow>
				</FormContainer>
			</MainContent>
			<Navbar navigation={navigation} />
		</AppContainer>
	);
};

export default PhotoUpload;
