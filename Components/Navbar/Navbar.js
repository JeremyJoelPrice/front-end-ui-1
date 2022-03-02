import {
	View,
	StyledNavbar,
	Text,
	FlexRow,
	StyledNavbarButton,
	CameraImage,
	ThumbnailImage
} from "../Styled Components";

const Navbar = () => {
	function onPress(destination) {
		console.log(destination);
	}

	return (
		<StyledNavbar>
			<FlexRow>
				<StyledNavbarButton onPress={() => onPress("Aviary")}>
					<Text>Aviary</Text>
				</StyledNavbarButton>
				<CameraImage source={require("../../icons/camera.png")} />
				<StyledNavbarButton>
					<Text>Marketplace</Text>
				</StyledNavbarButton>
			</FlexRow>
		</StyledNavbar>
	);
};

export { Navbar };
