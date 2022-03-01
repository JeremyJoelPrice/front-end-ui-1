import styled from "styled-components/native";
import { View } from "../";
import { Pressable } from "../buttons";
import { black, greenShadow, greenWhite } from "../colours";
import { ThumbnailImage } from "../images";

const StyledNavbar = styled(View)`
	background-color: ${greenWhite};
	width: 100%;
	height: 9vh;
	opacity: 0.9;
	// padding-top: 3vh;
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
`;

const width = 55;
// const height = width * 1.1666;
const height = 40 * 1.1666;

const CameraImage = styled(ThumbnailImage)`
	width: ${width}px;
	height: ${height}px;

	margin-top: 8px;
	padding-bottom: 10px;
`;

const StyledNavbarButton = styled(Pressable)`
	width: 90px;
	height: 40px;
    align-self: flex-end;
	border-radius: 40%;
	background-color: ${greenShadow};
`;

export { CameraImage, StyledNavbar, StyledNavbarButton };
