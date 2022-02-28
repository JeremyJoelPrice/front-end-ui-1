import styled from "styled-components/native";
import { Text as rawText } from "react-native";

const BlankText = styled(rawText)`
	box-sizing: border-box;
	display: block;
	border: 1pt solid red;
	margin: 0;
	padding: 0;
`;

const Text = styled(BlankText)``;

const HeaderText = styled(Text)`
	font-size: 1.8em;
`;

export { HeaderText, Text };
