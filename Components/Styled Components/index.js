import { Pressable } from "react-native";
import styled from "styled-components/native";

export * from "./containers";
export * from "./text";
export * from "./navbar";
export * from "./buttons";
export * from "./oneBird";
export * from "./images";

const CustomInput = styled(Pressable)`
	color: white;
	background-color: blue;
`;

export { CustomInput };
