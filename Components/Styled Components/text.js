import styled from "styled-components/native";
import { Text as rawText, TextInput as rawTextInput } from "react-native";
import { black, blueOutline, greenOutline, greenWhite } from "./colours";

const BlankText = styled(rawText)`
	box-sizing: border-box;
	display: block;
	// border: 1pt solid red;
	margin: 0;
	padding: 0;
	color: ${black};
`;

const TextInput = styled(rawTextInput)`
	borderbottomcolor: ${black};
	borderbottomwidth: 2pt;
	margin: 8px;
	text-align: center;
`;

const Text = styled(BlankText)`
	margin-top: auto;
	margin-bottom: auto;
`;

const RedText = styled(Text)`
	color: red;
	font-size: 0.8em;
`;

const SmallText = styled(Text)`
	font-size: 0.6em;
`;

const HeaderText = styled(Text)`
	font-size: 1.8em;
	text-shadow: 0.5px 0.5px 1px ${greenOutline};
`;

const TitleText = styled(Text)`
	margin: 8px 0 4px;
	font-family: serif;
`;

const MysteryText = styled(TitleText)`
	font-family: sans;
	font-size: 15em;
	color: white;
	text-shadow: 0.5px 0.5px 2px ${black};
	margin-top: 50px;
`;

const MysterySubtext = styled(MysteryText)`
	font-size: 3em;
	margin: 0;
`;
export {
	HeaderText,
	MysteryText,
	MysterySubtext,
	RedText,
	SmallText,
	Text,
	TextInput,
	TitleText
};
