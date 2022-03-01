import styled from "styled-components/native";
import { View as rawView } from "react-native";
import { blue, white } from "./colours";

const BlankContainer = styled(rawView)`
	box-sizing: border-box;
	display: block;
	border: 1pt solid red;
	margin: 0;
	min-height: 0;
	min-width: 0;
	padding: 0;
	text-align: center;
	background-color: ${blue};
`;

const View = styled(BlankContainer)``;

const FlexColumn = styled(View)`
	display: flex;
	flex-direction: column;
`;

const FlexRow = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const AppContainer = styled(FlexColumn)`
	height: 100%;
`;

const MainContent = styled(BlankContainer)`
	padding-left: 20px;
	padding-right: 20px;

	flex-grow: 1;
	overflow: scroll;
`;

const HeaderPanel = styled(View)`
	border: 1px solid lightgray;
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
