import styled from "styled-components/native";
import { Text as rawText, TextInput as rawTextInput } from "react-native";

const BlankText = styled(rawText)`
	box-sizing: border-box;
	display: block;
	border: 1pt solid red;
	margin: 0;
	padding: 0;
`;

const TextInput = styled(rawTextInput)``;

const Text = styled(BlankText)``;

const RedText = styled(Text)`
	color: red;
	font-size: 0.8em;
`;

const HeaderText = styled(Text)`
	font-size: 1.8em;
`;

export { HeaderText, RedText, Text, TextInput };
