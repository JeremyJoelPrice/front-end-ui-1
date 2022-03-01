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
	return (
		<StyledNavbar>
			<FlexRow>
				<StyledNavbarButton>
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
