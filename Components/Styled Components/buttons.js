import styled from "styled-components/native";
import { Pressable as rawPressable } from "react-native";

const StyledPressable = styled(rawPressable)`
	background-color: green;
`;

const Pressable = styled(rawPressable)``;

export { Pressable, StyledPressable };
