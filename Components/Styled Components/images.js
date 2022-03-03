import { Image } from "react-native";
import styled from "styled-components/native";
import { black, white } from "./colours";

const ThumbnailImage = styled(Image)`
	width: 100px;
	height: 100px;
	border-radius: 8%;
`;
const LargeImage = styled(Image)`
	width: 300px;
	height: 300px;
`;

const UserPhoto = styled(LargeImage)`
	border-radius: 4%;
	border: 2px solid ${black};
`;

export { LargeImage, ThumbnailImage, UserPhoto };
