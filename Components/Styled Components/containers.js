import styled from "styled-components/native";
import { View as rawView } from "react-native";

const BlankContainer = styled(rawView)`
	box-sizing: border-box;
	display: block;
	border: 1pt solid red;
	margin: 0;
	padding: 0;
`;

const View = styled(BlankContainer)``;

const FlexColumn = styled(View)`
	display: flex;
	flex-direction: column;
`;

const HighlightContainer = styled(View)`
	background-color: green;
`;

export { FlexColumn, HighlightContainer, View };
