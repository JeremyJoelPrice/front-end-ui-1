import styled from "styled-components/native";
import { blue, greenWhite, View } from ".";

export const Screen = styled(View)``;

export const MainContent = styled(View)`
	padding-left: 20px;
	padding-right: 20px;

	flex-grow: 1;
	overflow: scroll;
`;

export const HeaderPanel = styled(View)`
	background-color: ${greenWhite};
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	width: 100%;

	padding: 8px;
	margin-bottom: 20px;
`;
