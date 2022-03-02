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
	justify-content: space-evenly;
`;

const FormContainer = styled(FlexColumn)`
	height: 30vh;
	justify-content: space-between;
`;

const AppContainer = styled(FlexColumn)`
	height: 100%;
	background-color: ${blue};
`;

const HighlightContainer = styled(View)`
  background-color: green;
`;



export {
  FlexColumn,
  FlexRow,
  HighlightContainer,
  View,
  AppContainer,
  FormContainer
  
};
