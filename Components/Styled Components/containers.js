import styled from "styled-components/native";
import { View as rawView } from "react-native";
import { blue, greenWhite, white } from "./colours";

const BlankContainer = styled(rawView)`
	box-sizing: border-box;
	display: block;
	// border: 1pt solid red;
	margin: 0;
	min-height: 0;
	min-width: 0;
	padding: 0;
	text-align: center;
`;

const View = styled(BlankContainer)``;

const FlexColumn = styled(View)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const FlexRow = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const AppContainer = styled(FlexColumn)`
	height: 100%;
`;

const MainContent = styled(BlankContainer)`
	padding-left: 20px;
	padding-right: 20px;

	flex-grow: 1;
	overflow: scroll;

	background-color: ${blue};
`;

const HeaderPanel = styled(View)`
	background-color: ${greenWhite};
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	width: 100%;

	padding: 8px;
	margin-bottom: 20px;
`;

const HighlightContainer = styled(View)`
	background-color: green;
`;

export {
	AppContainer,
	FlexColumn,
	FlexRow,
	HeaderPanel,
	HighlightContainer,
	MainContent,
	View
};
