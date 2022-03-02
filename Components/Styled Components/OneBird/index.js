import styled from "styled-components/native";
import { View } from "..";

const StyledFactCardThumbnail = styled(View)`
  border: 2px solid black;
  min-height: 150px;
  width: 150px;
  margin-bottom: 150px;
`;
const StyledEmptyFactCardThumbnail = styled(StyledFactCardThumbnail)`
  border: 2px solid black;
  background-color: gray;
`;

export { StyledFactCardThumbnail, StyledEmptyFactCardThumbnail };
