import styled from "styled-components/native";
import { LargeImage, StyledBirdCard } from "..";

export const StyledFactCard = styled(StyledBirdCard)`
	width: 350px;
	height: 500px;
	padding: 10px;
`;

export const StyledFactCardImage = styled(LargeImage)`
	border-radius: 8%;
	margin-bottom: 20px;
`;

export const StyledMysteryFactCard = styled(StyledFactCard)`
	background-color: gray;
`;
