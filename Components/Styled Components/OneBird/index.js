import styled from "styled-components/native";
import { View } from "..";

const StyledFactCardThumbnail = styled(View)`
	border: 2px solid black;
`;
const StyledEmptyFactCardThumbnail = styled(StyledFactCardThumbnail)`
	border: 2px solid black;
	background-color: gray;
	height: 20px;
`;

export { StyledFactCardThumbnail, StyledEmptyFactCardThumbnail };
