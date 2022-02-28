import {
	View,
	StyledNavbar,
	Text,
	FlexRow,
	StyledNavbarButton
} from "../Styled Components";

const Navbar = () => {
	return (
		<StyledNavbar>
			<FlexRow>
				<StyledNavbarButton>
					<Text>Aviary</Text>
				</StyledNavbarButton>
				<StyledNavbarButton>
					<Text>Camera</Text>
				</StyledNavbarButton>
				<StyledNavbarButton>
					<Text>Marketplace</Text>
				</StyledNavbarButton>
			</FlexRow>
		</StyledNavbar>
	);
};

export { Navbar };
