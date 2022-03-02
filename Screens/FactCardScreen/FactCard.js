import { useContext, useEffect, useState } from "react";
import {
  View,
  HeaderText,
  LargeImage,
  Text,
  AppContainer,
  HeaderPanel,
  MainContent,
  StyledFactCard,
  FlexRow,
  StyledFactCardImage,
  ScrollableContainer,
} from "../../Components/Styled Components";
import { baseURL } from "../../api";
import { getFactCards } from "../../api";
import UserContext from "../../UserContext";
import FactCardsContext from "../../FactCardsContext";
import { Navbar } from "../../Components/Navbar/Navbar";

const FactCard = ({ navigation, route }) => {
  const bird_name = route.params.bird_name;
  const card_id = route.params.card_id;
  const { userId } = useContext(UserContext);
  const { factCards } = useContext(FactCardsContext);
  const factCard = factCards.filter((card) => card.card_id === card_id)[0];
  return (
    <AppContainer>
      <HeaderPanel>
        <HeaderText>{bird_name}</HeaderText>
      </HeaderPanel>
      <MainContent>
        <FlexRow>
          <StyledFactCard>
            <FlexRow>
              <StyledFactCardImage
                source={`${baseURL}/photo/${factCard.image_url}`}
              />
            </FlexRow>
            <ScrollableContainer>
              <Text>{factCard.fact}</Text>
            </ScrollableContainer>
          </StyledFactCard>
        </FlexRow>
      </MainContent>
      <Navbar navigation={navigation} />
    </AppContainer>
  );
};
export default FactCard;
