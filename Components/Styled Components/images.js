import { Image } from "react-native";
import styled from "styled-components/native";

const ThumbnailImage = styled(Image)`
	width: 100px;
	height: 100px;
`;
const LargeImage = styled(Image)`
	width: 300px;
	height: 300px;
`;

export { LargeImage, ThumbnailImage };
