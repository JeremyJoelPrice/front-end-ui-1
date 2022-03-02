import styled from "styled-components/native";

import { View } from "../";
import { black, blue, greenWhite, white } from "../colours";

export const StyledBirdCardList = styled(View)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const StyledBirdCard = styled(View)`
	width: 120px;
	height: 160px;
	margin: 2vw;
    padding: 5px;
    background-color: ${white}
	box-shadow: 2px 2px 10px ${black};
	border: 2px solid black;
    border-radius: 8%;
	padding-top: 7px;
`;
