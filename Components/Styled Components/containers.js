import styled from "styled-components/native";
import { View as rawView } from "react-native";

const BlankContainer = styled(rawView)`
  box-sizing: border-box;
  display: block;
  border: 1pt solid red;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const View = styled(BlankContainer)``;

const FlexColumn = styled(View)`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderPanel = styled(View)`
  border: 1px solid lightgray;
`;

const HighlightContainer = styled(View)`
  background-color: green;
`;

const CameraContainer = styled(View)`
 flex: 1,
 backgroundColor: "#fff";
 alignItems: "center";
 justifyContent: "center";
`;

export {
  FlexColumn,
  FlexRow,
  HeaderPanel,
  HighlightContainer,
  View,
  CameraContainer,
};
