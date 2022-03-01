import styled from "styled-components/native";
import { Pressable as rawPressable } from "react-native";
import { blueShadow } from "./colours";

const StyledPressable = styled(rawPressable)`
	background-color: green;
`;

const Pressable = styled(rawPressable)``;

const FormButton = styled(Pressable)`
	margin: 10px;
	padding: 15px;
	background-color: ${blueShadow};
`;

export { FormButton, Pressable, StyledPressable };
