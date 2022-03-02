import {
	View,
	StyledNavbar,
	Text,
	FlexRow,
	StyledNavbarButton,
	CameraImage,
	ThumbnailImage
} from "../Styled Components";

const Navbar = ({ navigation }) => {
	function onPress(destination) {
		navigation.navigate(destination);
	}

	return (
		<StyledNavbar>
			<FlexRow>
				<StyledNavbarButton onPress={() => onPress("Aviary")}>
					<Text>Aviary</Text>
				</StyledNavbarButton>
				<CameraImage source={require("../../icons/camera.png")} />
				<StyledNavbarButton onPress={() => onPress("UserLogin")}>
					<Text>Sign Out</Text>
				</StyledNavbarButton>
			</FlexRow>
		</StyledNavbar>
	);
};

export { Navbar };
