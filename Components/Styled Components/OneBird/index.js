import styled from "styled-components/native";
import { Text, View } from "..";
import { StyledBirdCard } from "../aviary/StyledBirdCard";

const StyledFactCardThumbnail = styled(StyledBirdCard)`
	min-height: 150px;
	width: 120px;
	margin-bottom: 50px;
	border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StyledEmptyFactCardThumbnail = styled(StyledFactCardThumbnail)`
	background-color: gray;
`;

const FactCardText = styled(Text)`
	
`;

export { FactCardText, StyledFactCardThumbnail, StyledEmptyFactCardThumbnail };
