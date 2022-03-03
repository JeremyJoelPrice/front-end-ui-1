import styled from "styled-components/native";
import { Pressable as rawPressable } from "react-native";
import { black, blueOutline, blueShadow } from "./colours";

const StyledPressable = styled(rawPressable)`
	background-color: green;
`;

const Pressable = styled(rawPressable)``;

const FormButton = styled(Pressable)`
	margin: 10px;
	margin-top: 25px;
	padding: 15px;
	background-color: ${blueShadow};
	border: 2pt solid ${blueOutline};
	border-radius: 2%;
	box-shadow: 1px 1px ${black};
`;

export { FormButton, Pressable, StyledPressable };
